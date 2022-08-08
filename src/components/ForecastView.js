import ForecastPeriod from "./ForecastPeriod";
import Header from "./Header";
function ForecastView({data}) {
    return (
        <div>
            <Header>Forecast</Header>
            {data.properties?.periods.map(p => <ForecastPeriod data={p}/>)}
        </div>
    )
}

export default ForecastView;