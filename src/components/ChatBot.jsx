import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { format } from "date-fns";
import { VscThreeBars } from "react-icons/vsc";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Whenever chatHistory changes, scroll to bottom
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    // When chatbot is opened for the first time, show greeting + available options
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setChatHistory((prev) => [
        ...prev,
        {
          text: `
Namaste! 🙏  
Main *HealGrimage* se hoon. Aapki kis tarah se madad kar sakte hain:

1. **Doctor/Hospital** ke baare mein jaankari  
2. **Treatment Cost** aur Packages  
3. **Under Budget** ya location-based hospital search  
4. General Healthcare **Q&A**

Aap apni query type karein.  
          `,
          isUser: false,
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, [isOpen, hasGreeted]);

  // Detect intent: 'treatment' or 'general'
  function detectIntent(input) {
    const lowerInput = input.toLowerCase();
    const treatmentKeywords = ["treatment", "hospital", "doctor", "clinic", "under", "budget", "near"];
    return treatmentKeywords.some((word) => lowerInput.includes(word))
      ? "treatment"
      : "general";
  }

  // Extract medical information from user input
  function extractMedicalInfo(input) {
    // More flexible patterns:
    //  - "acne treatment"
    //  - "treatment of 20000"
    //  - "under 20000"
    //  - "in fort", "near fort"
    const treatmentMatch = input.match(/([\w\s]+)\s+treatment/i);
    const treatment = treatmentMatch ? treatmentMatch[1].trim() : "";

    const budgetMatch = input.match(/(?:under|of)\s*(\d+)/i);
    const budget = budgetMatch ? parseInt(budgetMatch[1]) : "";

    const locationMatch = input.match(/(?:in|near)\s+([\w\s]+)/i);
    const location = locationMatch ? locationMatch[1].trim() : "";

    return { treatment, budget, location };
  }

  // Handle queries
  async function handleDetectedIntent(userInput) {
    const intent = detectIntent(userInput);

    if (intent === "treatment") {
      const { treatment, budget, location } = extractMedicalInfo(userInput);

      console.log("📤 Sending API Request:", { treatment, budget, location });

      try {
        // Example: your local or remote endpoint
        const response = await axios.post("http://localhost:3000/api/searchPackages", {
          treatment: treatment || "General",
          budget: budget || 50000,
          location: location || "Mumbai",
        });

        console.log("✅ API Response:", response.data);

        if (response.data && response.data.packages && response.data.packages.length > 0) {
          const allPackages = response.data.packages
            .map((pkg) => formatPackageResponse(pkg))
            .join("\n\n");

          setChatHistory((prevHistory) => [
            ...prevHistory,
            { text: userInput, isUser: true, timestamp: new Date().toISOString() },
            { text: allPackages, isUser: false, timestamp: new Date().toISOString() },
          ]);
        } else {
          setChatHistory((prevHistory) => [
            ...prevHistory,
            { text: userInput, isUser: true, timestamp: new Date().toISOString() },
            {
              text: "❌ No hospital found under your budget at this location.",
              isUser: false,
              timestamp: new Date().toISOString(),
            },
          ]);
        }
      } catch (error) {
        console.error("❌ API Error:", error.response ? error.response.data : error.message);
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { text: userInput, isUser: true, timestamp: new Date().toISOString() },
          {
            text: "❌ Server error! Could not fetch treatment packages. Please try again later!",
            isUser: false,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } else {
      // If not a treatment query, call your AI answer generator
      await generateAnswer(userInput);
    }
  }

  // Example: AI response via Gemini
  async function generateAnswer(userInput) {
    setGeneratingAnswer(true);
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyBlDjwGX4pK3mTIoMy-wZPQ7zlZbkBMRXE",
        {
          contents: [
            {
              parts: [
                { text: `HealGrimage AI: Please respond to this query - ${userInput}` },
              ],
            },
          ],
        }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { text: userInput, isUser: true, timestamp: new Date().toISOString() },
        { text: botResponse, isUser: false, timestamp: new Date().toISOString() },
      ]);
    } catch (error) {
      console.error("❌ Gemini API Error:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          text: "❌ Sorry, something went wrong. Please try again!",
          isUser: false,
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setGeneratingAnswer(false);
    }
  }

  function formatPackageResponse(packageData) {
    return `
**🏥 ${packageData["Hospital Name"]}**  
**📍 Address:** ${packageData["Address"]}  
**🩺 Treatment:** ${packageData["Treatments Provided"]}  
**💰 Cost:** ₹${packageData["Treatment Cost"]}  
**⏳ Duration:** ${packageData["Treatment Duration (Days)"]} days  
**📞 Contact:** ${packageData["Contact"]}
    `;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!question.trim()) return;
    handleDetectedIntent(question);
    setQuestion("");
  }

  function toggleChatbot() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-5 right-5 bg-[#003B6C] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-40"
      >
        💬 Chat
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-5 h-[35rem] flex flex-col bg-gray-100 z-50 shadow-2xl w-[30rem]">
          <div className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">HealGrimage Chatbot</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <VscThreeBars size={24} />
            </button>
          </div>

          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                    message.isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  } p-3 shadow-md rounded-lg`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-right mt-1 opacity-50">
                    {message.timestamp
                      ? format(new Date(message.timestamp), "HH:mm")
                      : "Time unknown"}
                  </p>
                </div>
              </div>
            ))}
            {generatingAnswer && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 rounded-lg p-3 shadow-md">
                  <Spinner />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
            <div className="flex space-x-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
