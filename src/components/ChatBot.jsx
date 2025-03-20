import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { format } from "date-fns";

// If you have a Spinner component, import it. Otherwise remove references below.
function Spinner() {
  return (
    <div className="flex items-center">
      <svg
        className="mr-2 h-5 w-5 animate-spin text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
      <span>Analyzing your request...</span>
    </div>
  );
}

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // NLU-based fields
  const [treatment, setTreatment] = useState("");
  const [budget, setBudget] = useState("");

  // Whether the bot has greeted user
  const [hasGreeted, setHasGreeted] = useState(false);

  const chatContainerRef = useRef(null);

  // === Scroll to bottom whenever chatHistory changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // === Greet user on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      addBotMessage(`
Namaste! 🙏 Main *HealGrimage* hoon. 
Mujhe free text mein bataiye: "Mujhe 20000 ke andar heart surgery chahiye" ya kuch bhi.
Main aapke text se treatment aur budget samajhne ki koshish karoonga.
      `);
    }
  }, [isOpen, hasGreeted]);

  // === Utility: add user/bot messages
  function addUserMessage(msg) {
    setChatHistory((prev) => [
      ...prev,
      { text: msg, isUser: true, timestamp: new Date().toISOString() },
    ]);
  }
  function addBotMessage(msg) {
    setChatHistory((prev) => [
      ...prev,
      { text: msg, isUser: false, timestamp: new Date().toISOString() },
    ]);
  }

  // === On form submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (!question.trim()) return;

    const userInput = question.trim();
    setQuestion("");
    addUserMessage(userInput);

    // Check for "new search" or "restart"
    if (checkForRestart(userInput)) {
      resetConversation();
      return;
    }

    setIsProcessing(true);
    try {
      const nluResult = await interpretWithGemini(userInput);
      handleExtractedEntities(nluResult);
    } catch (err) {
      console.error("interpretWithGemini error:", err);
      addBotMessage("❌ Gemini NLU error. Please try again later.");
    } finally {
      setIsProcessing(false);
    }
  }

  // === PaLM/Gemini request for NLU
  async function interpretWithGemini(userInput) {
    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=YOUR_API_KEY",
      {
        contents: [
          {
            parts: [
              {
                text: `
You are an NLU system. Extract two fields from the user's text:
- "treatment" (string)
- "budget" (number)
If user doesn't specify a budget, leave it blank or zero.
If user doesn't specify a treatment, leave it blank.
Reply with ONLY valid JSON. Example:
{"treatment":"Gallbladder Surgery","budget":20000}

User: "${userInput}"
                `,
              },
            ],
          },
        ],
      }
    );

    let raw = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    try {
      return JSON.parse(raw);
    } catch (jsonErr) {
      console.warn("Gemini returned non-JSON. Raw text:", raw);
      return { treatment: "", budget: "" };
    }
  }

  // === Evaluate extracted entities
  function handleExtractedEntities(nluResult) {
    let newTreatment = treatment;
    let newBudget = budget;

    if (nluResult.treatment) newTreatment = nluResult.treatment;
    if (nluResult.budget) newBudget = nluResult.budget;

    setTreatment(newTreatment);
    setBudget(newBudget);

    if (!newTreatment && !newBudget) {
      addBotMessage("Mujhe samajh nahin aaya. Kripya treatment aur budget bataiye.");
      return;
    }
    if (!newTreatment) {
      addBotMessage("Aapke budget ko samajh liya. Kripya bataiye kaunsa treatment chahiye?");
      return;
    }
    if (!newBudget) {
      addBotMessage(`Treatment: "${newTreatment}". Budget kitna hai?`);
      return;
    }

    // If both are present, do the search
    addBotMessage(
      `Got it! Treatment: "${newTreatment}", Budget: ₹${newBudget}.\nDhoondh raha hoon...`
    );
    searchPackages(newTreatment, newBudget);
  }

  // === Search packages from backend
  async function searchPackages(treatmentValue, budgetValue) {
    try {
      const resp = await axios.post("http://localhost:3000/api/searchPackages", {
        treatment: treatmentValue,
        budget: budgetValue,
      });
      const { packages } = resp.data;

      if (packages && packages.length > 0) {
        const allPackages = packages.map(formatPackageResponse).join("\n\n");
        addBotMessage(
          `Yeh rahe ${packages.length} packages:\n\n${allPackages}\n\nType 'new search' to start again.`
        );
      } else {
        addBotMessage("❌ Koi packages nahi mila. 'new search' karke try kar sakte hain.");
      }
    } catch (error) {
      console.error("❌ searchPackages error:", error?.response?.data || error.message);
      addBotMessage("❌ Server error! Please try again later.");
    }
  }

  // === Format package info
  function formatPackageResponse(pkg) {
    const hospitalName = pkg["Hospital Name"] || pkg["Hospital_Name"] || "Unknown Hospital";
    const address = pkg["Address"] || "N/A";
    const treat = pkg["Treatments Provided"] || pkg["Treatments_Provided"] || "N/A";
    const cost = pkg["Treatment Cost"] || pkg["Treatment_Cost"] || "N/A";
    const duration = pkg["Treatment Duration (Days)"] || pkg["Treatment_Duration"] || "N/A";
    const contact = pkg["Contact"] || "N/A";

    const costString = typeof cost === "number" ? cost.toLocaleString() : cost;
    return `
**🏥 ${hospitalName}**  
**📍 Address:** ${address}  
**🩺 Treatment:** ${treat}  
**💰 Cost:** ₹${costString}  
**⏳ Duration:** ${duration} days  
**📞 Contact:** ${contact}
    `;
  }

  // === Check for user "restart" input
  function checkForRestart(userInput) {
    const restartKeywords = ["restart", "start over", "new search", "phir se", "dobara", "naya"];
    return restartKeywords.some((kw) => userInput.toLowerCase().includes(kw));
  }

  // === Reset
  function resetConversation() {
    setTreatment("");
    setBudget("");
    addBotMessage("Ok, new search. Please mention treatment & budget in your own words.");
  }

  // === Toggle chat UI
  function toggleChatbot() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Floating Gradient Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-5 right-5 z-40 rounded-full 
                   bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                   px-5 py-4 text-white font-semibold shadow-lg
                   hover:shadow-xl transition-all duration-200"
      >
        💬 Chat
      </button>

      {isOpen && (
        <div
          className="fixed bottom-20 right-5 z-50 flex flex-col 
                     max-w-96 max-w-[100%] h-[32rem] 
                     bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 text-white flex justify-between items-center">
            <h1 className="font-bold text-lg">HealGrimage Chat</h1>
            <button
              onClick={toggleChatbot}
              className="text-gray-100 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Chat Body with subtle gradient */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-3 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100"
          >
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] p-3 rounded-lg shadow-sm 
                    ${msg.isUser ? "bg-blue-500 text-white" : "bg-white text-gray-800"} 
                    whitespace-pre-line break-words
                    `}
                  style={{ marginBottom: "0.25rem" }}
                >
                  {/* Convert markdown-like text to HTML */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        .replace(/\n/g, "<br/>"),
                    }}
                  />
                  <div className="text-xs text-right mt-1 opacity-70">
                    {format(new Date(msg.timestamp), "HH:mm")}
                  </div>
                </div>
              </div>
            ))}

            {isProcessing && (
              <div className="flex items-center">
                <div className="bg-white text-gray-800 p-3 rounded-lg shadow-sm">
                  <Spinner />
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <form onSubmit={handleSubmit} className="bg-gray-50 p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBot;
