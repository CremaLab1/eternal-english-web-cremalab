import "./QuestionCard.styles.css";
import { motion } from "framer-motion";

const QuestionCard = ({ title, children, prev, next }) => {
  return (
    <motion.div
      className="questionCard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="questionCardTitle">{title}</h2>
      <div className="questioncardContainer">
        <p className="inter">{children}</p>
      </div>
      <div className="questionCardButtons">
        <button className="questionIndividualButton" onClick={prev}>
          Back
        </button>
        <button className="questionIndividualButton marginTwo" onClick={next}>
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
