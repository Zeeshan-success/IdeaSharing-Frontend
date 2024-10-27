import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <Link className="navbar-brand d-flex justify-content-center " to="/">
            <img
              className="w-25"
              src="/apple-touch-icon.png"
              alt="picture Area"
            />
          </Link>

          <div className="navbar-nav  w-75">
            <Link className="nav-link " to="/">
              Scroll Ideas
            </Link>
            <Link className="nav-link" to="/create-idea">
              Share Ideas
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
