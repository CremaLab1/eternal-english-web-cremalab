import "./Form.styles.css";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div>
      Form
      <button>
        <Link to="/faq">Next</Link>
      </button>
    </div>
  );
};

export default Form;
