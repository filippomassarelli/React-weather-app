import React from "react";
import Joke from "./Joke"

function Footer() {

    const year = new Date().getFullYear();
    return (
      <footer>
        <Joke />
        <br></br>
        <p className="copyright">Copyright {year} ⓒ Filippo Massarelli</p>
        <br></br>

      </footer>
    );
}

export default Footer;
