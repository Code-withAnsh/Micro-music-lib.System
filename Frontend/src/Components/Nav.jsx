import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/Login");
  };
  return (
    <header className="site-nav">
      <NavLink className="brand-lockup" to="/">
        <span className="brand-dot" />
        <span>
          mml<span className="brand-mark">/</span>
        </span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" className={(e) => (e.isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/Musics" className={(e) => (e.isActive ? "active" : "")}>
          Discover
        </NavLink>
      </nav>
      <button className="nav-login" onClick={navigateHandler}>
        Enter library <span aria-hidden="true">↗</span>
      </button>
    </header>
  );
};

export default Nav;
