import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };
  return (
    <nav>
      <div className="nav-wrapper #1976d2 blue darken-2">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/cart">
              <i
                style={{ padding: "0 20px" }}
                className="material-icons large #od47al blue darken-4"
              >
                add_shopping_cart
              </i>
            </Link>
          </li>
          {jwt ? (
            <li>
              <li>
                <i
                  style={{ padding: "0 20px" }}
                  className="material-icons large red"
                  onClick={logout}
                >
                  logout
                </i>
              </li>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
