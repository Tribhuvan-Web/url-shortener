// import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#2c4850",
// });
// //Add your Client ID here ⬇️
// const clientId = "179ae7e3-3847-4268-9310-c455015b9d19";  

// const config = {
//     composerPlaceholder: "What would you like to know?",
//     botName: "Shortly support",
//     botAvatar: "https://picsum.photos/200/300",
//     botDescription:
//       "Hi! 👋 Welcome to Shortly. A chat agent to assist customer with their queries and problems",
//     email: {
//       title: "amitraj857804@gmail.com",
//       link: "amitraj857804@gmail.com",
//     },
//     phone: {
//       title: "8252376122",
//       link: "8252376122",
//     },
//     website: {
//       title: "",
//       link: "",
//     },
//     termsOfService: {
//       title: "Terms of service",
//       link: "https://botpress.com/terms",
//     },
//     privacyPolicy: {
//       title: "Privacy policy",
//       link: "https://botpress.com/privacy",
//     },
//   };

// export default function App() {
//   const client = getClient({ clientId });
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);
//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <style>{style}</style>
//       <WebchatProvider
//         key={JSON.stringify(config)}
//         theme={theme}
//         //Add the configuration to the Webchat Provider ⬇️
//         configuration={config}
//         client={client}
//       >
//         <Fab onClick={toggleWebchat} />
//         <div
//           style={{
//             display: isWebchatOpen ? "block" : "none",
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//     </div>
//   );

// }
