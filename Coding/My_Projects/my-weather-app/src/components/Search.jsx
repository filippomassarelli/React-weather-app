import React, {useState} from "react";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Fab, Zoom } from "@material-ui/core";


function Search(props){

    //State to track whether input is active or not (show submit button if it is)
    const [active, setActive] = useState(false);

    function showButton(){
        setActive(true)
    }

    //State to track input's content
    const [city, setCity] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setCity(newValue)
    }

    //Submit the user input city
    function submitCity(){
        props.onSearch(city);
        setCity("");
        // event.preventDefault();
    }

    return(
        <div>
        <form className="create-note">
          <input
            type="text"
            onChange={handleChange}
            onClick={showButton}
            value={city}
            placeholder="Type a city..."
          />
          <Zoom in={active ? true : false}>
            <Fab onClick={submitCity}>
              <DoubleArrowIcon />
            </Fab>
          </Zoom>
        </form>
      </div>  
    )
}


export default Search;