import { Link } from "react-router-dom";
import "./style.css";
const About = () => {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src="./assets/profile.jpg" alt="" className="user-profile" />
      <p className="user-name">Chilli</p>
      <p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h3>Categories</h3>
      <ul className="categories">
        <li>
          <Link to="/">Life</Link>
        </li>
        <li>
          <Link to="/">Style</Link>
        </li>
        <li>
          <Link to="/">Tech</Link>
        </li>
        <li>
          <Link to="/">Sport</Link>
        </li>
        <li>
          <Link to="/">Photo</Link>
        </li>
        <li>
          <Link to="/">Develop</Link>
        </li>
        <li>
          <Link to="/">Music</Link>
        </li>
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <Link to="/">
            <img src="./assets/Facebook.svg" alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="./assets/Twitter.svg" alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="./assets/Instagram.svg" alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="./assets/Github.svg" alt="GitHub" />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default About;
