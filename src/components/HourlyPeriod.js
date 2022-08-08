import dayjs from "dayjs";
import DataPoint from "./DataPoint";
import Subhead from "./Subhead";

function HourlyPeriod({data}) {
    const hour = dayjs(data.startTime);


    return (
        <div className="mb-5">
            <Subhead>{hour.format("dddd HH:MM")}</Subhead>
            <DataPoint label="Temp" data={data.temperature}/>
            <DataPoint label="Forecast" data={data.shortForecast}/>
            
        

        </div>
    );
}

export default HourlyPeriod;