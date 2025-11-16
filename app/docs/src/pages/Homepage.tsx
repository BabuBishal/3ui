import { Link } from "react-router-dom";
import { Button } from "3ui";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1 className="hero-title">3UI Component Library</h1>
        <p className="hero-description">
          A modern, accessible React component library with TypeScript support.
          Beautiful components, powerful hooks, and complete customization.
        </p>
        <div className="hero-actions">
          <Link to="/getting-started">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/components/button">
            <Button variant="outline" size="lg">
              View Components
            </Button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Themeable</h3>
            <p>Built-in light/dark mode with CSS custom properties</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3>Accessible</h3>
            <p>ARIA compliant components following WAI-ARIA best practices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Tree-shakeable</h3>
            <p>Import only what you need for optimal bundle size</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>TypeScript</h3>
            <p>Full type safety with TypeScript definitions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🪝</div>
            <h3>Custom Hooks</h3>
            <p>Useful React hooks for common patterns</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Zero Dependencies</h3>
            <p>Lightweight with no external dependencies</p>
          </div>
        </div>
      </section>

      <section className="quick-start">
        <h2 className="quick-start-title">Quick Start</h2>
        <div className="code-block">
          <pre>
            <code>{`npm install 3ui
# or
yarn add 3ui
# or
pnpm add 3ui`}</code>
          </pre>
        </div>
        <p className="quick-start-description">
          Then import and use components in your React application:
        </p>
        <div className="code-block">
          <pre>
            <code>{`import { Button, Input, useToast } from "3ui";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input id="email" placeholder="Enter email" />
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Homepage;