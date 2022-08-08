import React, {useEffect, useState} from "react";

const WeatherContext = React.createContext();
const latLongUrl = "https://api.weather.gov/points/"

function WeatherProvider({children}) {
    const [currentStationData, setCurrentStationData] = useState({});
    const [currentPayload, setCurrentPayload] = useState({})

    useEffect( () => {
        queryLatLongForStation("38.2527","-85.7585");
    })

    const queryLatLongForStation = (lat, long) => {
        const url = latLongUrl + lat + "," + long;
        console.log(url, 
            {"content-type": "application/json", "user-agent": "weather api demo"});
        fetch(url)
        .then((response) => response.json())
        .then((data) => setCurrentStationData(data))
        .catch((err) => console.log(err));
    }

    const queryForecast = () => {
        fetch(currentStationData.properties.forecast)
        .then((response) => response.json())
        .then((data) => setCurrentPayload(data));
    }

    const queryHourly = () => {
        fetch(currentStationData.properties.forecastHourly)
        .then((response) => response.json())
        .then((data) => setCurrentPayload(data));
    }

    const weatherObj = {
        currentStationData,
        currentPayload,
        queryLatLongForStation,
        queryForecast,
        queryHourly
    }

    return (
        <WeatherContext.Provider value={weatherObj}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
export {WeatherContext};