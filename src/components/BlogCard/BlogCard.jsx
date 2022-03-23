import "./BlogCard.style.css";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, children, entry }) => {
  return (
    <article className="blogCard">
      <Link to={`/blog/${entry}`}>
        <img className="blogCardImage" src={img} alt="Post Image" />
      </Link>
      <h2 className="blogCardTitle">{title}</h2>
      <p className="blogCardText">{children}</p>
    </article>
  );
};

export default BlogCard;
