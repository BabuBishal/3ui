import React from "react";
import { Accordion } from "l3ui";

const FAQ = ({faqItems}) => {
  return (
    <Accordion defaultOpenItems={["faq-0"]} className="faq-accordion">
      {faqItems.map((item, idx) => (
        <Accordion.Item key={idx} value={`faq-${idx}`}>
          <Accordion.Trigger>{item.q}</Accordion.Trigger>
          <Accordion.Content>
            <p>{item.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FAQ;
