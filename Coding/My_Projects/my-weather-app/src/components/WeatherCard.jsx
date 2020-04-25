import React, {useState, useEffect} from "react";
import logo from "../images/02d.png";



function WeatherCard(props){

    const [weather, setWeather] = useState({
        city: "",
        description: "",
        temperature: "",
        iconCode: ""
    });

    
    const query = props.city;
    const units = "metric";
    const apiKey = process.env.REACT_APP_API_KEY;

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;


  useEffect( async () => {
    const response = await fetch(url);
    const weatherData = await response.json();

    setWeather({      
        city : weatherData.name,
        description : weatherData.weather[0].description,
        temperature : weatherData.main.temp,
        iconCode : weatherData.weather[0].icon
  });

  }, [])
  
  let iconURL = "http://openweathermap.org/img/wn/"+weather.iconCode+"@2x.png";  

  return (
      <div className="card">
          <h1>{weather.city}</h1>
          <img src= {iconURL} />
          <p>{weather.description} with a temperature of {weather.temperature}°C</p>
      </div>
  )

}



export default WeatherCard;