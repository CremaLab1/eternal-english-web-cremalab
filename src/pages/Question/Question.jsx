import "./Question.styles.css";
import QuestionMobile from "../../containers/QuestionMobile/QuestionMobile";
import { useState, useEffect } from "react";
import QuestionDesktop from "../../containers/QuestionDesktop/QuestionDesktop";

const Question = () => {
  const [size, setSize] = useState("mobile");
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSize("desktop");
    }
  }, []);

  if (size === "mobile") {
    return <QuestionMobile />;
  } else {
    return <QuestionDesktop />;
  }
};

export default Question;
