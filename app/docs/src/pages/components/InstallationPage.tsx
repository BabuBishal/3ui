import Container from "../../shared/templates/container/Container";
import {Spinner} from "3ui"

const InstallationPage = () => {
  return (
    <section id="installation" className="section installation-section">
      <h2 className="section-heading">Installation</h2>
      <h4 className="section-desc">
        A guide to install and use the components from this UI library
      </h4>
      <Container
        title="Installation guide"
        desc="Step by step guide to use the different components of the UI library"
      >
        <Container.content>
          "This feature is not complete yet. Please wait for future updates..."
        </Container.content>

         <Container.content>
          // Predefined sizes
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

// Default (medium)
<Spinner />

// Custom size in pixels
<Spinner size={100} />

// Custom size as string
<Spinner size="50px" />

// With custom color
<Spinner size="lg" color="#ff0000" />

// With custom thickness
<Spinner size="md"  />

// With label
<Spinner size="md">Loading...</Spinner>

// Slow spinner
<Spinner size="lg" speed={2}>Please wait...</Spinner>
        </Container.content>
      </Container>
    </section>
  );
};

export default InstallationPage;

