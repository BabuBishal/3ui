import type { ReactNode } from "react";
import "./Container.css";

type ContainerProps = {
  title: string;
  desc: string;
  children: ReactNode;
};

const Container = ({ title, desc, children }: ContainerProps) => {
  return (
    <div className="container-legacy">
      <div className="container-legacy-header">
        <h3 className="container-legacy-title">{title}</h3>
        <p className="container-legacy-desc">{desc}</p>
      </div>
      <div className="container-legacy-content">{children}</div>
    </div>
  );
};

Container.content = ({ children }: { children: ReactNode }) => {
  return <div className="container-legacy-items">{children}</div>;
};

Container.code = ({ children }: { children: ReactNode }) => {
  return <div className="container-legacy-code">{children}</div>;
};

export default Container;