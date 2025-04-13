import React from "react";
import OnboardingPanels from "./components/OnboardingPanels";

function App() {
  return (
    <div className="p-10">
      <OnboardingPanels userType="both" onFinish={() => alert("You're done!")} />
    </div>
  );
}

export default App;
