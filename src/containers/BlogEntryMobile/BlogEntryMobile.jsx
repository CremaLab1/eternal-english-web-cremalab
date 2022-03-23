import "./BlogEntryMobile.style.css";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import { fadeDelayVariants } from "../../animations/fadeDelay";

const BlogEntryMobile = ({ title, info, previewMobile, postMobile }) => {
  return (
    <Layout>
      <motion.div
        variants={fadeDelayVariants}
        initial="initial"
        animate="animate"
        className="blogEntryContainer"
      >
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
      </motion.div>
    </Layout>
  );
};

export default BlogEntryMobile;
