import data from "../../db/data.json";
import { Link } from "react-router-dom";
import Author from "../../components/Author";
import Category from "../../components/Category";
import "./style.css";
const PostView = () => {
  console.log("ㅁ", data);

  return (
    <div>
      <div className="banner" style={{ backgroundImage: "url(/assets/post-background6.jpg)" }}>
        <div className="max-width">
          <div className="banner-contents">
            <p className="today">
              May <em>25</em> Wednesday
            </p>
          </div>
        </div>
      </div>
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
              <Author
                userName={data.posts[0].userName}
                profileImg={data.posts[0].profileImg}
                created={data.posts[0].created}
              />
              <Category category={data.posts[0].category} />
              <div className="title-wrap">
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <button className="btn-like">Like</button>
              </div>
              <hr />
              <div className="view-contents">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis
                  voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                  quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque!
                  Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                  dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae
                  vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis
                  voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                  quas odio cum incidunt repudiandae vel.
                </p>
                <img src="./images/post-background6.jpg" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis
                  voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                  quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque!
                  Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                  dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae
                  vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis
                  voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                  quas odio cum incidunt repudiandae vel.
                </p>
              </div>
              <div className="btn-group">
                <Link to="/" className="btn-modify">
                  <span className="a11y-hidden">modify</span>
                </Link>
                <button type="button" className="btn-delete">
                  <span className="a11y-hidden">delete</span>
                </button>
              </div>
              <Link to="./" className="btn-back">
                <span className="a11y-hidden">Back</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PostView;
