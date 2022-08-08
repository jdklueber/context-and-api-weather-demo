import {useContext} from "react";
import { WeatherContext } from "./context/WeatherContext";

function App() {
  const weatherContext = useContext(WeatherContext);

  const clickHandler = () => {
      weatherContext.queryLatLongForStation("38.2527","-85.7585");
  }
  const forecastHandler = () => {
    weatherContext.queryForecast();
  }

  const forecastHourlyHandler = () => {
    weatherContext.queryHourly();
  }

  return (
    <div className="App">
        <button onClick={clickHandler}>Query LatLong</button><br/>
        <button onClick={forecastHandler}>Query Forecast</button><br/>
        <button onClick={forecastHourlyHandler}>Query Hourly</button><br/>
        <h1>Station Data</h1>
        <p>
            {JSON.stringify(weatherContext.currentStationData)}
        </p>
        <h1>Forecast Data</h1>
        <p>
          {JSON.stringify(weatherContext.currentPayload)}
        </p>
    </div>
  );
}

export default App;
