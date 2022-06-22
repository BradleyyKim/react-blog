import Author from "../../Author";
import Category from "../../Category";
import "./style.css";

const PostItem = ({ post }) => {
  return (
    <li>
      <a href="post-view.html" className="post">
        <article>
          <img src="./images/post-img6.jpg" alt="" />
          <div className="contents-wrap">
            <Category category={post.category} />

            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

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
      </a>
    </li>
  );
};
export default PostItem;
