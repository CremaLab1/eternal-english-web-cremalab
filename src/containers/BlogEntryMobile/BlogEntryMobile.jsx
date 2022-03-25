import "./BlogEntryMobile.style.css";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg";

const BlogEntryMobile = ({ title, info, previewMobile, postMobile }) => {
  return (
    <div className="blogEntryContainer">
      <img className="blogEntryImage" src={previewMobile} alt="" />
      <div className="blogEntryData">
        <header className="blogEntryHeader">
          <div className="blogEntryButtons">
            <Link to="/blog">
              <img src={ArrowBack} alt="Arrow Back" />
            </Link>
            <Link className="inter entryLinkHome" to="/">
              Home
            </Link>
          </div>
          <h1>{title}</h1>
        </header>
        <main className="blogEntryMain inter">
          <p>{info}</p>
          <img className="blogEntryPostImage" src={postMobile} alt="" />
        </main>
      </div>
    </div>
  );
};

export default BlogEntryMobile;
