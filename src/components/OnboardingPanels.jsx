import { useState } from "react";

const sponsorSteps = [
  { title: "Welcome Sponsor", content: "You're helping fund schools." },
  { title: "Pricing", content: "$1,500 full / $1,000 minimum" },
  { title: "Timeline", content: "Submit logo, approve proof, get shirts printed." },
  { title: "How It Works", content: "1. Register 2. Choose school 3. Upload logo" },
  { title: "FAQs", content: "Q: Can I sponsor multiple? A: Yes." }
];

const schoolSteps = [
  { title: "Welcome School", content: "This program gives you free shirts and donations." },
  { title: "What's Included", content: "Shirts + donations + visibility" },
  { title: "Timeline", content: "Proof review, approval, delivery" },
  { title: "Process", content: "Register → Approve → Receive" },
  { title: "FAQs", content: "Q: Any cost? A: No, 100% free" }
];

const bothSteps = [...sponsorSteps, { title: "Now for Schools", content: "School-side info" }, ...schoolSteps];

export default function OnboardingPanels({ userType = "both", onFinish }) {
  const [stepIndex, setStepIndex] = useState(0);
  const steps =
    userType === "sponsor" ? sponsorSteps :
    userType === "school" ? schoolSteps :
    bothSteps;

  return (
    <div className="max-w-xl mx-auto p-6 rounded-xl bg-white shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-blue-800">{steps[stepIndex].title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{steps[stepIndex].content}</p>

      <div className="flex justify-between mt-4">
        <button disabled={stepIndex === 0} onClick={() => setStepIndex(stepIndex - 1)}>Back</button>
        {stepIndex === steps.length - 1 ? (
          <button onClick={onFinish}>Finish</button>
        ) : (
          <button onClick={() => setStepIndex(stepIndex + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
