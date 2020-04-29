import React, {useState, useEffect} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import WeatherCard from "./WeatherCard"
import Search from "./Search"

function App() {

    const [searchedCity, setSearchedCity] = useState("London")

    const [weather, setWeather] = useState({
        city: "",
        description: "",
        temperature: "",
        icon: ""
    });

    function searchCity(passedCity){
        setSearchedCity(passedCity);

        // setSearchedCity( prevValue => {
        //     return {
        //         ...prevValue,
        //         city: passedCity
        //     } 
        // });        
    }

    const units = "metric";
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+searchedCity+"&appid="+apiKey+"&units="+units;



    useEffect( () => {
        async function fetchWeatherData() {

            console.log('useEffect has been called!');

            const response = await fetch(url);
            const weatherData = await response.json();  
            
            console.log(weatherData);
            
        
            setWeather({   
                city: searchedCity,   
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
            <Search onSearch={searchCity} />
            <WeatherCard data={weather} />
            <Footer />
        </div>
    );
}

export default App;
