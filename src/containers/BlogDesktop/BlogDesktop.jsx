import "./BlogDesktop.style.css";
import LateralBar from "../../components/LateralBar/LateralBar";
import HeroImage from "../../assets/nurse-helping-patient.png";
import BlogsData from "../../data/entrys.json";
import BlogSection from "../../components/BlogSection/BlogSection";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/home.svg";
import ArrowBack from "../../assets/arrow-back.svg";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import { fadeDelayVariants } from "../../animations/fadeDelay";

const BlogDesktop = () => {
  return (
    <Layout>
      <motion.div
        variants={fadeDelayVariants}
        initial="initial"
        animate="animate"
        className="blogDesktopContainer"
      >
        <LateralBar secondary />
        <main className="blogsDesktopMain">
          <div className="heroSection">
            <img className="heroImage" src={HeroImage} alt="" />
          </div>
          <div className="blogsDesktopButtons">
            <Link className="blogDesktopLink" to="/faq">
              <img src={ArrowBack} alt="Arrow Right" />
            </Link>
            <Link className="blogDesktopLink marginLink" to="/">
              <img src={HomeIcon} alt="Home Icon" />
            </Link>
          </div>
          <div className="blogsSectionsContainers">
            <div className="blogsEntrys">
              {BlogsData.map(({ id, title, info, previewImage, entry }) => (
                <BlogSection
                  key={id}
                  id={id}
                  title={title}
                  img={previewImage}
                  entry={entry}
                >
                  {info}
                </BlogSection>
              ))}
            </div>
          </div>
        </main>
      </motion.div>
    </Layout>
  );
};

export default BlogDesktop;
