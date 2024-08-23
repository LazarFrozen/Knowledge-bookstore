import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

function Accordion({ title, answer }) {
  const [accourdionOpen, setAccordionOpen] = useState(false);

  function handleAccordion() {
    setAccordionOpen(!accourdionOpen);
  }

  return (
    <div className="py-2">
      <button
        onClick={() => handleAccordion()}
        className="flex w-full justify-between"
      >
        <span className="text-xl font-semibold">{title}</span>
        {accourdionOpen ? (
          <span>
            <FaCircleMinus className="text-secondaryColor text-2xl" />
          </span>
        ) : (
          <span>
            <FaCirclePlus className="text-secondaryColor text-2xl" />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${accourdionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
}

export default Accordion;
