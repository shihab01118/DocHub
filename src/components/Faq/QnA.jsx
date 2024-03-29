import { useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import PropTypes from "prop-types";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const QnA = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="mb-5">
      <AccordionItem>
        <AccordionHeader className="w-full">
          <div
            className={`border border-[#eee] text-left p-4 flex justify-between items-center gap-8 hover:bg-primary transition-all duration-300 group hover:text-white ${
              expand ? "text-white bg-primary border-none" : ""
            }`}
            onClick={handleExpand}
          >
            <h3 className="md:text-lg font-medium">{question}</h3>
            <div
              className={`text-2xl text-dark group-hover:text-white ${
                expand ? "text-white" : ""
              }`}
            >
              {expand ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
            </div>
          </div>
        </AccordionHeader>

        <AccordionBody>
          <p className="text-ash text-sm md:text-base p-4 leading-6  border border-[#eee] border-t-none">
            {answer}
          </p>
        </AccordionBody>
      </AccordionItem>
    </div>
  );
};

QnA.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default QnA;
