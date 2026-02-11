import { useState } from "react";
import Invitation from "./components/Invitation";
import ThankYou from "./components/ThankYou";

function App() {
  const [accepted, setAccepted] = useState(false);

  return accepted ? (
    <ThankYou />
  ) : (
    <Invitation onAccept={() => setAccepted(true)} />
  );
}

export default App;
