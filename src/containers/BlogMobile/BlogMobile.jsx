import "./BlogMobile.styles.css";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg";
import BlogsData from "../../data/entrys.json";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogMobile = () => {
  return (
    <div className="blogContainerMobile">
      <div className="blogButtonsMobile">
        <Link className="blogButtonBack" to="/faq">
          <img src={ArrowBack} alt="Arrow Back" />
        </Link>
        <Link className="blogButtonHome" to="/">
          Home
        </Link>
      </div>
      <main className="containerBlogs">
        {BlogsData.map(({ title, info, previewMobile, id, entry }) => (
          <BlogCard key={id} title={title} img={previewMobile} entry={entry}>
            {info}
          </BlogCard>
        ))}
      </main>
    </div>
  );
};

export default BlogMobile;
