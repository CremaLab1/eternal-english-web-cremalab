import "./BlogEntryDektop.style.css";
import LateralBar from "../../components/LateralBar/LateralBar";
import { Link } from "react-router-dom";
import MosaicIcon from "../../assets/border-all.svg";
import ArrowBack from "../../assets/arrow-back.svg";

const BlogEntryDesktop = ({ title, info, postImage }) => {
  return (
    <div className="blogEntryDesktop">
      <LateralBar secondary />
      <div className="blogEntryDesktopMain">
        <header className="blogEntryDesktopHeader">
          <h1 className="blogEntryDesktopTitle">{title}</h1>
        </header>
        <img
          className="blogEntryImageDekstop"
          src={postImage}
          alt="Post Image"
        />
        <main className="blogEntryDesktopMainContend">
          <div className="blogEntryDesktopButton">
            <Link className="blogDesktopLink" to="/blog">
              <img src={ArrowBack} alt="Arrow Back" />
            </Link>
            <Link className="blogDesktopLink marginLinkDesktop" to="/">
              <img src={MosaicIcon} alt="Mosaic Icon" />
            </Link>
          </div>
          <p>{info}</p>
        </main>
      </div>
    </div>
  );
};

export default BlogEntryDesktop;
