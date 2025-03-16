import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

function ChatAgent() {
  const [sessionId, setSessionId] = useState("");
  const [containerSize, setContainerSize] = useState({
    height: "100px",
    width: "100px",
  });

  useEffect(() => {
    // Generate a unique session ID for each user
    const newSessionId = uuidv4();
    setSessionId(newSessionId);

    const handleMessage = (event) => {
      if (event.data.type === "webchat:opened") {
        setContainerSize({ height: "500px", width: "350px" });
      } else if (event.data.type === "webchat:closed") {
        setContainerSize({ height: "100px", width: "100px" });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div
      className="fixed bottom-4 right-2 z-50 transition-all duration-300"
      style={containerSize}
    >
      <iframe
        style={{ height: "100%", width: "100%", border: "none" }}
        srcDoc={`
              <!doctype html>
              <html lang="en">
                
                <body>
                  <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
                  <script defer>
                    window.botpress.on("webchat:ready", (conversationId) => {
                      
                    });
                    window.botpress.init({
                      "botId": "faea35b7-9138-440e-aac8-f88822ce7d40",
                      "configuration": {
                        "botName": "Shortly support",
                        "botDescription": "A chat agent to assist customer with their queries and problems",
                        "website": {},
                        "email": {
                          "title": "amitraj857804@gmail.com",
                          "link": "amitraj857804@gmail.com"
                        },
                        "phone": {
                          "title": "8252376122",
                          "link": "8252376122"
                        },
                        "termsOfService": {},
                        "privacyPolicy": {},
                        "color": "#2c4850",
                        "variant": "solid",
                        "themeMode": "light",
                        "fontFamily": "inter",
                        "radius": 3.5,
                        "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/03/11/04/20250311040656-DCZSF6XC.css",
                        "allowFileUpload": false
                      },
                      "clientId": "179ae7e3-3847-4268-9310-c455015b9d19",
                      "userId": "${sessionId}"
                    });

                      window.botpress.on("webchat:opened", () => {
                        window.parent.postMessage({ type: "webchat:opened" }, "*");
                    });

                    window.botpress.on("webchat:closed", () => {
                      window.parent.postMessage({ type: "webchat:closed" }, "*");
                    });

                  </script>
                </body>
              </html>
            `}
      ></iframe>
    </div>
  );
}

export default ChatAgent;
