import React from "react";

const steps = [
  { n: "1", title: "Explore Components", desc: "Check out our component library and find what you need" },
  { n: "2", title: "Read Documentation", desc: "Each component has detailed documentation and examples" },
  { n: "3", title: "Build Amazing Apps", desc: "Use l3UI to create beautiful, accessible applications" },
];

const NextSteps = () => (
  <div className="steps-grid">
    {steps.map((s) => (
      <div className="step-card" key={s.n}>
        <div className="step-number">{s.n}</div>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
    ))}
  </div>
);

export default NextSteps;
