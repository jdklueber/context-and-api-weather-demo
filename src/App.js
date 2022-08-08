import {useContext, useState} from "react";
import StationData from "./components/StationData";
import ForecastView from "./components/ForecastView";
import HourlyView from "./components/HourlyView";
import { WeatherContext } from "./context/WeatherContext";
import Button from "./components/Button";
import LatLongInput from "./components/LatLongInput";

function App() {
  const weatherContext = useContext(WeatherContext);
  const [currentView, setCurrentView] = useState();
  const [lat, setLat] = useState("38.2527");
  const [long, setLong] = useState("-85.7585");

  const clickHandler = () => {
      weatherContext.queryLatLongForStation(lat, long);
      forecastHandler();
  }
  const forecastHandler = () => {
    weatherContext.queryForecast();
    setCurrentView("FORECAST");
  }

  const forecastHourlyHandler = () => {
    weatherContext.queryHourly();
    setCurrentView("HOURLY");
  }

  const getView = () => {
    if (currentView === null || currentView === undefined) {
      return "";
    }

    if (currentView === "FORECAST") {
      return <ForecastView data={weatherContext.currentPayload}/>
    } else if (currentView === "HOURLY") {
      return <HourlyView data={weatherContext.currentPayload}/>
    }

  }

  return (
    <div className="App">
        <Button onClick={clickHandler} label="Query Lat/Long"/>
        <Button onClick={forecastHandler} label="Query Forecast"/>
        <Button onClick={forecastHourlyHandler} label="Query Hourly"/>
        <LatLongInput lat={lat} long={long} setLat={setLat} setLong={setLong}/>
        <StationData data={weatherContext.currentStationData}/>
        {getView()}        
    </div>
  );
}

export default App;
