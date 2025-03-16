import { BrowserRouter as Router } from "react-router-dom";

import { getApps } from "./utils/helper";
import ChatAgent from "./components/ChatAgent";

export default function App() {
  const CurrentApp = getApps();

  return (
    <>
      <Router>
        <CurrentApp />
        <ChatAgent />
      </Router>
    </>
  );
}
