import React from "react";




function WeatherCard(props){



  return (
      <div className="card">
          <h1>{props.data.city}</h1>
          <img src= {props.data.icon} />
          <p>{props.data.temperature}°C</p>
          <p>Currently: {props.data.description}</p>
      </div>
  )

}



export default WeatherCard;