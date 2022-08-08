
function StationData({data}) {
    return (
        <div className="text-2xl text-white bg-blue-900">
            Weather in {data.properties?.relativeLocation.properties.city}, 
             {data.properties?.relativeLocation.properties.state}
        </div>
    );
}

export default StationData;