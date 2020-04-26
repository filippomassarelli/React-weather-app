import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import WeatherCard from "./WeatherCard"
import Search from "./Search"

function App() {

    const [requestedCity, setRequestedCity] = useState("London");

    function searchCity(passedCity){
        setRequestedCity(passedCity)

    }

    console.log(requestedCity);
    

    return (
        <div>
            <Header />
            <Search onSearch={searchCity} />
            <WeatherCard city={requestedCity} />
            <Footer />
        </div>
    );
}

export default App;
