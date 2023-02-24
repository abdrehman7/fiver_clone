import React, { useEffect } from "react";
import "./Navbar.css";
import pic from "../../Assets/profile.jpeg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const isActive = () => {
    window.scrollY ? setActive(true) : setActive(false);
  };

  const currentUser = {
    id: 1,
    userName: "ali",
    isSeller: true,
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <>
      <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Link to="/" className="link">
              <span>Fiverr</span>

              <span className="dot">.</span>
            </Link>
          </div>
          <div className="link">
            <span className="text">Fiver Business</span>
            <span className="text">Fiver Explore</span>
            <span className="text">English</span>
            <span className="text">Sign in</span>
            {!currentUser?.isSeller && (
              <span className="text">Become a Seller</span>
            )}
            {!currentUser && <button>Join </button>}
            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={pic} className="img" />
                <span>{currentUser.userName}</span>
                {open && (
                  <div className="option">
                    {currentUser?.isSeller && (
                      <>
                        <span>Gig</span>
                        <span>Add new gig</span>
                      </>
                    )}
                    <span>Order</span>
                    <span>Message</span>
                    <span>logout</span>
                  </div>
                )}
              </div>
            )}
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
