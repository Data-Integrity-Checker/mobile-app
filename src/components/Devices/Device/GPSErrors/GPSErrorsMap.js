import React, { useState, useEffect } from 'react';
import {GoogleMap, 
        withScriptjs, 
        withGoogleMap, 
        Polyline,
        lineSymbol
    } from 'react-google-maps';
// key: "AIzaSyAVTq9lBNRwnB0WhEQk7HsfWuYSGVOT3F0"

export default function Map(props) {

    useEffect(() => {
        console.log(props);
        fetchDetails();
    }, []);

    const [location, setLocation] = useState({
        coordinates : [{}]
    });

    const fetchDetails = async () => {

        let fetchLocation1 = await fetch(
            `http://localhost:3000/updates/${props.updates[0]}`
        );

        let fetchLocation2 = await fetch(
            `http://localhost:3000/updates/${props.updates[1]}`
        );

        const info1 = await fetchLocation1.json();
        const info2 = await fetchLocation2.json();

        console.log("info1");
        console.log(info1);

        console.log("info2");
        console.log(info2);

        if(info1 === null)
            return;

        let lng = info1.location.coordinates[0];
        let lat = info1.location.coordinates[1];

        let coords = [{lat, lng}]

        lng = info2.location.coordinates[0];
        lat = info2.location.coordinates[1];

        coords = [...coords, {lat, lng}];

        console.log(coords);

        setLocation(coords);
    };

    const MapWrapped = withScriptjs(withGoogleMap( () => {
        return (
            <GoogleMap
                defaultZoom={17}
                defaultCenter={location[0]}
            >
                <Polyline
                path={location}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "20px"
                        }
                    ]
                }}
                />
            </GoogleMap>
        );
    }));

    return (
        <div style={{ width: "95%", height: "40vh" }}>
            <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAVTq9lBNRwnB0WhEQk7HsfWuYSGVOT3F0`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}