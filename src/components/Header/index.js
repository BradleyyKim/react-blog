import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <header>
      <div className="max-width">
        <h1>
          <Link to="/">
            <img src="./assets/Logo.svg" alt="My Blog" />
          </Link>
        </h1>
        <ul>
          {/* 로그인 */}
          <li className="profile-img">
            <Link to="/">
              <img src="./assets/profile.jpg" alt="My Page" />
            </Link>
          </li>
          <li>
            <a href="#" className="button">
              <img src="./assets/icon-modify-white.svg" alt="" />
              <span>Write</span>
            </a>
          </li>
          <li>
            <button className="button white">
              <img src="./assets/icon-logout.svg" alt="" />
              <span>Logout</span>
            </button>
          </li>
          {/* 로그인 */}

          {/* 로그아웃 */}
          <li>
            <a href="#" className="button gray">
              <img src="./assets/icon-login.svg" alt="" />
              <span>Login</span>
            </a>
          </li>
          <li className="only-pc">
            <a href="#" className="button gray">
              <img src="./assets/icon-register.svg" alt="" />
              <span>Register</span>
            </a>
          </li>
          {/* 로그아웃 */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
