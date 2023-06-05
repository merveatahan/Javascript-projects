import { useRef, useState } from "react";
import "./style.css";
import { AccordionItem } from "./AccordionItem";

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <>
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span>expand_more</span>
      </header>

      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </>
  );
};

const faqs = [
  {
    header: "What is lorem Ipsum?",
    text: "lorem...",
  },
];

export const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <article>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
    </article>
  );
};
