import HourlyPeriod from "./HourlyPeriod";
import Header from "./Header";
import Container from "./Container";

function HourlyView({data}) {
    return (
        <div>
            <Header>Hourly Forecast</Header>
            <Container>
                {data.properties?.periods.map(p => <HourlyPeriod data={p}/>)}
            </Container>
        </div>
    )
}

export default HourlyView;