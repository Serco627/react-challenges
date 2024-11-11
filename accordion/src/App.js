import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are your products made?",
    text: "Our products are made in several locations, primarily in the US and Europe, where we maintain high standards for quality and sustainability.",
  },
  {
    title: "What is your return policy?",
    text: "We offer a 30-day return policy on most items, provided they are in unused condition and in the original packaging.",
  },
  {
    title: "Do you offer international shipping?",
    text: "Yes, we ship to many countries outside the US. Shipping fees and customs duties may vary depending on the destination.",
  },
  {
    title: "Can I change my order after it has been placed?",
    text: "Once an order has been confirmed, it cannot be changed. However, you can cancel the order within 24 hours and place a new one.",
  },
  {
    title: "How can I track my order?",
    text: "You will receive a tracking number via email once your order has been shipped. You can use this number to track the status of your delivery.",
  },
  {
    title: "Do you offer gift cards?",
    text: "Yes, we offer digital gift cards in various denominations. They can be purchased directly on our website and sent to your email.",
  },
  {
    title: "How do I contact customer support?",
    text: "You can reach our customer support team via email at support@ourcompany.com or by calling our hotline at 1-800-123-4567.",
  },
  {
    title: "Are your products environmentally friendly?",
    text: "We prioritize sustainability in our production process. Many of our products are made with eco-friendly materials and packaging.",
  },
  {
    title: "Do you offer a warranty on your products?",
    text: "Yes, all of our products come with a one-year warranty against defects in material or workmanship.",
  },
  {
    title: "Can I return an item I bought on sale?",
    text: "Items purchased on sale can only be returned if they are defective. Otherwise, they are final sale and non-refundable.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => {
        return (
          <AccordionItem
            currentOpen={currentOpen}
            onOpen={setCurrentOpen}
            title={faq.title}
            number={index}
            key={faq.title}
          >
            {" "}
            {faq.text}
          </AccordionItem>
        );
      })}
      <AccordionItem
        currentOpen={currentOpen}
        onOpen={setCurrentOpen}
        title={"What is the meaning of life?"}
        number={24}
      >
        This is just the children prop.
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ number, title, currentOpen, onOpen, children }) {
  const isOpen = number === currentOpen;

  function handleToggle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="number">{number < 9 ? `0${number + 1}` : number + 1}</div>
      <div className="title">{title}</div>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
