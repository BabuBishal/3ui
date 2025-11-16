import { ReactNode } from "react";
import "./ComponentPage.css";

interface ComponentPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const ComponentPage = ({
  title,
  description,
  children,
}: ComponentPageProps) => {
  return (
    <div className="component-page">
      <header className="component-header">
        <h1 className="component-title">{title}</h1>
        <p className="component-description">{description}</p>
      </header>
      <div className="component-content">{children}</div>
    </div>
  );
};

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

ComponentPage.Section = ({ title, description, children }: SectionProps) => (
  <section className="component-section">
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
    <div className="section-content">{children}</div>
  </section>
);