import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const [active, isActive] = React.useState(false);
  return (
    <>
      <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <span>Fiverr</span>
            <span className="dot">.</span>
          </div>
          <div className="link">
            <span className="text">Fiver Business</span>
            <span className="text">Fiver Explore</span>
            <span className="text">English</span>
            <span className="text">Sign in</span>
            <span className="text">Become a Seller</span>
            <button>Join </button>
          </div>
        </div>
        {active && (
          <>
            <hr />
            <div className="manue">
              <span>test</span>
              <span>test2</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
