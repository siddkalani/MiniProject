// import { resourcesLinks, platformLinks, communityLinks } from "../../constants/LandingData";

// const Footer = () => {
//   return (
//     <footer className="mt-20 border-t py-10 border-neutral-700">
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//         <div>
//           <h3 className="text-md font-semibold mb-4">Resources</h3>
//           <ul className="space-y-2">
//             {resourcesLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Platform</h3>
//           <ul className="space-y-2">
//             {platformLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Community</h3>
//           <ul className="space-y-2">
//             {communityLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { resourcesLinks, platformLinks, communityLinks } from "../../constants/LandingData";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer id="F" className="footer">
      <div className="footer-grid">
        <div>
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-list">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Platform</h3>
          <ul className="footer-list">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Community</h3>
          <ul className="footer-list">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
