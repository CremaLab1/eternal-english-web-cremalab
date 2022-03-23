import "./QuestionDesktop.styles.css";
import LateralBar from "../../components/LateralBar/LateralBar";
import QuestionsData from "../../data/questions.json";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import { fadeDelayVariants } from "../../animations/fadeDelay";

const QuestionDesktop = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleNextQuestion = () => {
    setShowQuestion(false);
    setQuestionIndex(
      questionIndex < QuestionsData?.length - 1 ? questionIndex + 1 : 0
    );
    setTimeout(() => {
      setShowQuestion(true);
    }, 500);
  };

  const handlePrevQuestion = () => {
    setShowQuestion(false);
    setQuestionIndex(
      questionIndex != 0 ? questionIndex - 1 : QuestionsData?.length - 1
    );
    setTimeout(() => {
      setShowQuestion(true);
    }, 500);
  };

  const { title, question } = QuestionsData[questionIndex];

  return (
    <Layout>
      <motion.div
        variants={fadeDelayVariants}
        initial="initial"
        animate="animate"
        className="questionsDesktopMain"
      >
        <LateralBar />
        <div className="questionDesktopContainer">
          <h1 className="inter questionDesktopTitle">
            Frequently Asked Questions
          </h1>

          <Link to="/blog" className="questionNextButton">
            <img
              className="questionNextButtonImage"
              src={ArrowBack}
              alt="Arrow Up"
            />
          </Link>

          <div>
            <AnimatePresence>
              {showQuestion && (
                <QuestionCard
                  title={title}
                  prev={handlePrevQuestion}
                  next={handleNextQuestion}
                >
                  {question}
                </QuestionCard>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default QuestionDesktop;
