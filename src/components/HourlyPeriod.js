import dayjs from "dayjs";
import DataPoint from "./DataPoint";
import Subhead from "./Subhead";

function HourlyPeriod({data}) {
    const hour = dayjs(data.startTime);


    return (
        <div>
            <Subhead>{hour.format("HH:MM")}</Subhead>
            <DataPoint label="Temp" data={data.temperature}/>
            <DataPoint label="Forecast" data={data.shortForecast}/>
            
        

        </div>
    );
}

export default HourlyPeriod;