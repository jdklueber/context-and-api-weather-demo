import LabeledInput from "./LabeledInput";

function LatLongInput({setLat, setLong, lat, long}) {
    return (
        <div>
            <LabeledInput label="Lattitude" type="number" value={lat} onChange={(evt) => setLat(evt.currentTarget.value)} />
            <LabeledInput label="Longitude" type="number" value={long} onChange={(evt) => setLong(evt.currentTarget.value)} />
        </div>
    );
}

export default LatLongInput;