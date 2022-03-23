import { useState, useEffect } from "react";
import BlogMobile from "../../containers/BlogMobile/BlogMobile";
import BlogDesktop from "../../containers/BlogDesktop/BlogDesktop";

const Blog = () => {
  const [size, setSize] = useState("mobile");
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSize("desktop");
    }
  }, []);

  if (size === "mobile") {
    return <BlogMobile />;
  } else {
    return <BlogDesktop />;
  }
};

export default Blog;
