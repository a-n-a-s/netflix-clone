import React, { useEffect ,useState } from "react";
import "./Nav.css";

const Nav = () => {

    const [show,handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
        className="nav_logo"
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
        alt=""
        className="nav_avatar"
      />
    </div>
  );
};

export default Nav;
