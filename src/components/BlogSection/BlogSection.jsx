import { Link } from "react-router-dom";
import "./BlogSection.style.css";
import ArrowRight from "../../assets/arrow-right.svg";

const BlogSection = ({ id, title, children, img, entry }) => {
  const formatedId = id.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });

  return (
    <article className="blogSection">
      <p className="blogSectionNumber">{formatedId}</p>
      <div className="blogSectionInfo inter">
        <img src={img} alt="Blog Entry" />
        <div className="blogSectionContent">
          <h2 className="blogSectionTitle">{title}</h2>
          <p className="blogSectionText">{children}</p>
          <hr className="blogSectionLine" />
          <Link className="blogSectionLink" to={`/blog/${entry}`}>
            View Details
            <img src={ArrowRight} alt="Arrow Icon" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogSection;
