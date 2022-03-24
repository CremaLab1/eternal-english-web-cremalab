import { useEffect, useState } from "react";
import "./Home.styles.css";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import { fadeDelayVariants } from "../../animations/fadeDelay";

const Home = () => {
  const [desktopVideo, setDesktopVideo] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDesktopVideo(true);
    }
  }, []);

  return (
    <Layout>
      <motion.div
        variants={fadeDelayVariants}
        initial="initial"
        animate="animate"
        className="videoWrapper"
      >
        <video
          className="videoBackground"
          src={
            desktopVideo
              ? "http://www.ztk.dzb.mybluehost.me/cremalab/videos/bgvideodesktop.mp4"
              : "http://www.ztk.dzb.mybluehost.me/cremalab/videos/bgvideomobile.mp4"
          }
          loop
          playsInline
          autoPlay
          muted
          preload="metadata"
        ></video>
        <main className="main">
          <div className="mainContend">
            <h1 className="titleStyle">
              Live again,
              <br />
              recover your
              <br />
              <span className="blueSpan">Health</span> with
              <br />
              Stem Cells
            </h1>
            <Link to="/faq" className="homeButton poppins">
              Start the journey
            </Link>
          </div>
        </main>
      </motion.div>
    </Layout>
  );
};

export default Home;
