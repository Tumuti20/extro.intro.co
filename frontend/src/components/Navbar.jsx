import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles, closeMenu }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/collection", title: "Collection" },
    { path: "/testimonials", title: "Testimonials" },
    { path: "mailto:@samueltumuti20.com", title: "Contact" },
  ];

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
    closeMenu(); // Close the menu after clicking
  };

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.path}
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`
          }
          onClick={handleClick} // Scrolls to top smoothly & closes menu
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
