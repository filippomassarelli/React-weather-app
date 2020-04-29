import React, {useState, useEffect} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import WeatherCard from "./WeatherCard"
import Search from "./Search"
import { Button, Zoom } from "@material-ui/core";
import StandaloneToggleButton from './Toggle';


function App() {

    const [searchedCity, setSearchedCity] = useState("London")

    const [seeForecast, setSeeForecast] = useState("false")

    const [weather, setWeather] = useState({
        city: "",
        lon: "",
        lat: "",
        description: "",
        temperature: "",
        icon: ""
    });

    const [forecastTomorrow, setForecastTomorrow] = useState({
        temperature: "",
        description: "",
        icon: ""
    });

    function searchCity(passedCity){
        setSearchedCity(passedCity);   
        setSeeForecast(false);   
    }

    function askForecast(){
        //Fetch API for Forecast weather by coordinates  

        async function fetchForecastData(){

                console.log('Second useEffect has been called!');

                const response = await fetch(url2);
                const forecastData = await response.json();  
        
                console.log(forecastData);
        
    
                setForecastTomorrow({   
                    temperature: Math.round(forecastData.daily[0].temp.day),  
                    description : forecastData.daily[0].weather[0].description,
                    icon : "http://openweathermap.org/img/wn/"+forecastData.daily[0].weather[0].icon+"@2x.png"
                });
        }
        fetchForecastData();


        setSeeForecast(true);


    }


    const units = "metric";
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+searchedCity+"&appid="+apiKey+"&units="+units;
    let url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+weather.lat+"&lon="+weather.lon+"&appid="+apiKey+"&units="+units;





 //Fetch API for current weather by city name  
     useEffect( () => {
        async function fetchWeatherData() {

            console.log('useEffect has been called!');

            const response = await fetch(url);
            const weatherData = await response.json();  
            
            console.log(weatherData);
            
        
            setWeather({   
                city: searchedCity, 
                lat:weatherData.coord.lat,
                lon:weatherData.coord.lon, 
                description : weatherData.weather[0].description,
                temperature : Math.round(weatherData.main.temp),
                icon : "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            });
        }
        fetchWeatherData();
     }, [searchedCity])







    return (
        <div>
            <Header />
            <h1 className="city" >{searchedCity}</h1>
            <Search onSearch={searchCity} />

            <div style={ {display:"flex", flexDirection:"row", justifyContent: "center", alignItems:"center"} }>
                <WeatherCard data={weather} title="Now"/>
                { (seeForecast===true) ? <Zoom in={true}><WeatherCard data={forecastTomorrow} title="Tomorrow" /></Zoom>  : <StandaloneToggleButton askForecast={askForecast} /> }
            </div>


            <Footer />
        </div>
    );
}

export default App;
