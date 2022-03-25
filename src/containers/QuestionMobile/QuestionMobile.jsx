import "./QuestionMobile.styles.css";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg";
import Line from "../../assets/line.svg";
import QuestionModal from "../../components/QuestionModal/QuestionModal";
import QuestionsData from "../../data/questions.json";
import DiseasesData from "../../data/diseases.json";
import CheckIcon from "../../assets/check.svg";

const QuestionMobile = () => {
  return (
    <div className="questionsMobileContainer">
      <div className="questionsButtons">
        <Link to="/">
          <img src={ArrowBack} alt="Arrow" />
        </Link>
        <Link to="/blog">
          <img className="rotateIcon" src={ArrowBack} alt="Arrow" />
        </Link>
      </div>
      <h2 className="inter questionsTitle">Diseases We Specialized</h2>
      <div className="diseasesContainer">
        {DiseasesData.map((disease, index) => (
          <div key={index} className="itemListContainer">
            <img className="checkIcon" src={CheckIcon} alt="Icon Check" />
            <p>{disease}</p>
          </div>
        ))}
      </div>
      <h2 className="inter questionsTitle">Frequently Asked Questions</h2>
      <img src={Line} alt="Line Decorator" />
      <div className="questionsElements">
        {QuestionsData.map(({ title, question }, index) => (
          <QuestionModal key={index} title={title}>
            {question}
          </QuestionModal>
        ))}
      </div>
    </div>
  );
};

export default QuestionMobile;
