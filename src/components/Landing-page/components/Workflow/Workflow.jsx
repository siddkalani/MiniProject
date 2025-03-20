// import { CheckCircle2 } from "lucide-react";
// import codeImg from "./code.jpg";
// import { checklistItems } from "../../constants/LandingData";

// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
//         Accelerate your{" "}
//         <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//           coding workflow.
//         </span>
//       </h2>
//       <div className="flex flex-wrap justify-center">
//         <div className="p-2 w-full lg:w-1/2">
//           <img src={codeImg} alt="Coding" />
//         </div>
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-12">
//               <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
//                 <p className="text-md text-neutral-500">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;


import { CheckCircle2 } from "lucide-react";
import codeImg from "./code.jpg";
import { checklistItems } from "../../constants/LandingData";
import "./Workflow.css"; // Import your CSS file

const Workflow = () => {
  return (
    <div id="WF" className="workflow-container">
      <h2 className="workflow-title">
        Accelerate your <span className="gradient-text">coding journey.</span>
      </h2>
      <div className="workflow-content">
        <div className="image-container">
          <img src={codeImg} alt="Coding" className="code-image" />
        </div>
        <div className="checklist-container">
          {checklistItems.map((item, index) => (
            <div key={index} className="checklist-item">
              <div className="circle-icon">
                <CheckCircle2 />
              </div>
              <div className="item-details">
                <h5 className="item-title">{item.title}</h5>
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
