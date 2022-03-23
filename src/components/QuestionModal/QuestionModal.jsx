import "./QuestionModal.styles.css";
import PlusCircle from "../../assets/plus-circle.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const QuestionModal = ({ title, children }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);

  return (
    <div className="questionModalContainer">
      <div className="questionModalContainerHeader">
        <p className="questionModalTitle">{title}</p>
        <img src={PlusCircle} onClick={handleModal} alt="Plus Icon" />
      </div>
      <div></div>
      <motion.div
        animate={{ height: modal ? "auto" : 0 }}
        initial={{ height: 0 }}
        transition={{ type: "keyframes", duration: 0.2 }}
        className="questionModalText"
      >
        <p className="inter questionModalTitleText">{children}</p>
      </motion.div>
    </div>
  );
};

export default QuestionModal;
