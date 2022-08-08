import DataPoint from "./DataPoint";
import Subhead from "./Subhead";

function ForecastPeriod({data}) {
    return (
        <div className="mb-5">
            
            <Subhead>{data.name}:</Subhead>
            <DataPoint label="Temp" data={data.temperature}/>
            <DataPoint label="Forecast" data={data.detailedForecast}/>
        </div>
    );
}

export default ForecastPeriod;