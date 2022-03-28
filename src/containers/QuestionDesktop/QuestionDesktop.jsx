import "./QuestionDesktop.styles.css";
import LateralBar from "../../components/LateralBar/LateralBar";
import QuestionsData from "../../data/questions.json";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg";
import DiseasesData from "../../data/diseases.json";
import CheckIcon from "../../assets/check.svg";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

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
    <div className="questionsDesktopMain">
      <LateralBar />
      <div className="questionDesktopContainer">
        <h1 className="inter questionDesktopTitle">Diseases We Specialized</h1>
        <Link to="/blog" className="questionNextButton">
          <img
            className="questionNextButtonImage"
            src={ArrowBack}
            alt="Arrow Up"
          />
        </Link>
        <div className="diseasesContainerDesktop">
          {DiseasesData.map((disease, index) => (
            <div className="diseaseItemDesktop" key={index}>
              <img src={CheckIcon} alt="Check Icon" />
              <p>{disease}</p>
            </div>
          ))}
        </div>

        <h2 className="inter questionDesktopTitle">
          Frequently Asked Questions
        </h2>

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
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default QuestionDesktop;
