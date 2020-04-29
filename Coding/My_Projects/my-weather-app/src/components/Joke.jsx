import React, { useState, useEffect } from "react";

function Joke(){

  const [joke, setJoke] = useState([]);

  useEffect( async () => {
    const response = await fetch("https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?type=single");
    const data = await response.json();
    const receivedJoke = data.joke;
    setJoke(receivedJoke);
  }, [])

  return (
      <div className="joke">
          <p>{joke}</p>
      </div>
  )

  


}


export default Joke;