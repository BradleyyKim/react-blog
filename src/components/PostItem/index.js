import Author from "../Author";
import Category from "../Category";
import "./style.css";

const PostItem = ({ posts }) => {
  return (
    <li>
      <a href="post-view.html" className="post">
        <article>
          <img src="./" alt="" />
          <div className="contents-wrap">
            <Category category={posts.category} />

            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

            <Author userName={posts.userName} profileImg={posts.profileImg} created={posts.created} />

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
