import "./Step.css";

export const Step = ({ number, title, description, children }) => {
  return (
    <div className="install-step">
      <div className="step-header">
        <span className="step-number">{number}</span>
        <div className="step-info">
          <h3 className="step-title">{title}</h3>
          <p className="step-description">{description}</p>
        </div>
      </div>

      {children}
    </div>
  );
};

