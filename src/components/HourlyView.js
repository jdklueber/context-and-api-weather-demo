import HourlyPeriod from "./HourlyPeriod";
import Header from "./Header";

function HourlyView({data}) {
    return (
        <div>
            <Header>Hourly Forecast</Header>
            {data.properties?.periods.map(p => <HourlyPeriod data={p}/>)}
        </div>
    )
}

export default HourlyView;