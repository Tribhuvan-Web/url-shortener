import { BrowserRouter as Router } from "react-router-dom";

import { getApps } from "./utils/helper";

export default function App() {
  const CurrentApp = getApps();

  return (
    <>
      <Router>
        <CurrentApp />
      </Router>
    </>
  );
}
