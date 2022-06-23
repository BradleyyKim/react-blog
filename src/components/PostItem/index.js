import { Link } from "react-router-dom";
import Author from "../Author";
import Category from "../Category";
import "./style.css";

const PostItem = ({ post }) => {
  console.log(post);
  return (
    <li>
      <Link to={`post-view/${post.id}`} className="post">
        <article>
          <img src={post.thumbnail} alt="" />
          <div className="contents-wrap">
            <Category category={post.category} />

            <h3>{post.title}</h3>

            <Author userName={post.userName} profileImg={post.profileImg} created={post.created} />

            <p className="post-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas,
              voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum
              incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
              nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
              facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat,
              eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
              dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel."
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
};
export default PostItem;
