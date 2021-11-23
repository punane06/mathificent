import React from "react";

function Footer() {
    return (
        <footer className="navbar fixed-bottom bg-dark">
        <a href="www.kadikerner.com" className="text-light">
          Copyright &copy; {new Date().getFullYear()} Kadi K.
        </a>
      </footer>
    )
}

export default Footer;