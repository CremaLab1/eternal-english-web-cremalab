import "./BlogEntryDektop.style.css";
import LateralBar from "../../components/LateralBar/LateralBar";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import { fadeDelayVariants } from "../../animations/fadeDelay";
import { Link } from "react-router-dom";
import MosaicIcon from "../../assets/border-all.svg";
import ArrowBack from "../../assets/arrow-back.svg";

const BlogEntryDesktop = ({ title, info, postImage }) => {
  return (
    <Layout>
      <motion.div
        variants={fadeDelayVariants}
        initial="initial"
        animate="animate"
        className="blogEntryDesktop"
      >
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
      </motion.div>
    </Layout>
  );
};

export default BlogEntryDesktop;
