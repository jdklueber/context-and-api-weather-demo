import Container from "./Container";
import ForecastPeriod from "./ForecastPeriod";
import Header from "./Header";
function ForecastView({data}) {
    return (
        <div>
            <Header>Weekly Forecast</Header>
            <Container>
                {data.properties?.periods.map(p => <ForecastPeriod data={p}/>)}
            </Container>
        </div>
    )
}

export default ForecastView;