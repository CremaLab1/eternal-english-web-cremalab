import { useState, useEffect } from "react";
import BlogEntryMobile from "../../containers/BlogEntryMobile/BlogEntryMobile";
import BlogEntryDesktop from "../../containers/BlogEntryDesktop/BlogEntryDesktop";
import BlogsData from "../../data/entrys.json";
import { useParams } from "react-router-dom";

const BlogEntry = () => {
  const [size, setSize] = useState("mobile");
  const { id } = useParams();
  const [{ title, info, postImage, previewMobile, postMobile }] =
    BlogsData.filter(({ entry }) => entry === id);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSize("desktop");
    }
  }, []);

  if (size === "mobile") {
    return (
      <BlogEntryMobile
        title={title}
        info={info}
        previewMobile={previewMobile}
        postMobile={postMobile}
      />
    );
  } else {
    return <BlogEntryDesktop title={title} info={info} postImage={postImage} />;
  }
};

export default BlogEntry;
