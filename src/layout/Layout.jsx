import "./Layout.style.css";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      {children}
      <motion.div
        animate={{
          clipPath: [
            "inset(0% 100% 0% 0%)",
            "inset(0% 0% 0% 0%)",
            "inset(0% 0% 0% 100%)",
          ],
        }}
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        className="sectionAnimated"
        transition={{ duration: 0.7 }}
      >
        <div className="sectionBlue"></div>
        <div className="sectionDarkBlue"></div>
        <div className="sectionVeryDarkblue"></div>
      </motion.div>
    </div>
  );
};

export default Layout;
