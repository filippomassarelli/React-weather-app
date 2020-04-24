import React from "react";
import Joke from "./Joke"

function Footer() {

    const year = new Date().getFullYear();
    return (
      <footer>
        <Joke />
        <br></br>
        <p>Copyright ⓒ Filippo Massarelli {year}</p>
      </footer>
    );
}

export default Footer;