import { useState } from "react";
import DynamicHedding from "../DynamicHedding/DynamicHedding";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accordions = [
    {
      title: "What people want to know?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
    },
    {
      title: "What people want to know?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
    },
    {
      title: "What people want to know?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
    },
    {
      title: "What people want to know?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
      <div>
        <img
          className="h-40"
          src="https://learnwithsumit.com/_next/static/media/Prerequisite.b0ff46bc.svg"
          alt=""
        />
        <DynamicHedding>
          <h2 className="text-2xl lg:text-4xl font-bold text-textPrimary">
            Frequently asked questions
          </h2>
        </DynamicHedding>
        <p className="text-textPrimary text-base">
          We have listed here the answers to some of your common questions. We
          request you to read this list once before asking questions. Then you
          don't have to wait for our reply and save your valuable time.
        </p>
      </div>
      <div className="rounded-lg font-sans mx-4 bg-bgPrimary/20">
        {accordions.map((PerAccordion, idx) => (
          <div key={idx} className="p-4">
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-center py-4 w-full h-full"
            >
              <span className="text-xl text-textPrimary">
                {PerAccordion.title}
              </span>
              <svg
                className="fill-[#00A2FF] shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                isOpen === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
