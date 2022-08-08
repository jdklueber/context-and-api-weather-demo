
function StationData({data}) {
    return (
        <div className="pl-5 text-2xl text-white bg-blue-900">
            {data.properties?.relativeLocation.properties.city}, 
             {data.properties?.relativeLocation.properties.state}
        </div>
    );
}

export default StationData;