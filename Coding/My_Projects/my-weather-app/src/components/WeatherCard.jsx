import React from "react";




function WeatherCard(props){



  return (
      <div className="card">
          <h1>{props.title}</h1>
          <img src= {props.data.icon} />
          <p>{props.data.temperature}°C</p>
          <p>Expecting {props.data.description}</p>
      </div>
  )

}



export default WeatherCard;