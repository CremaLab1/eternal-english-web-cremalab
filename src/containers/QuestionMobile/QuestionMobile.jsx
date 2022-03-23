import "./QuestionMobile.styles.css";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg";
import Line from "../../assets/line.svg";
import QuestionModal from "../../components/QuestionModal/QuestionModal";
import QuestionsData from "../../data/questions.json";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import { fadeDelayVariants } from "../../animations/fadeDelay";

const QuestionMobile = () => {
  return (
    <Layout>
      <motion.div
        variants={fadeDelayVariants}
        initial="initial"
        animate="animate"
        className="questionsMobileContainer"
      >
        <div className="questionsButtons">
          <Link to="/">
            <img src={ArrowBack} alt="Arrow" />
          </Link>
          <Link to="/blog">
            <img className="rotateIcon" src={ArrowBack} alt="Arrow" />
          </Link>
        </div>
        <h1 className="inter questionsTitle">Frequently Asked Questions</h1>
        <img src={Line} alt="Line Decorator" />
        <div className="questionsElements">
          {QuestionsData.map(({ title, question }, index) => (
            <QuestionModal key={index} title={title}>
              {question}
            </QuestionModal>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default QuestionMobile;
