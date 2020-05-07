import React, { useState, useEffect } from 'react';
import {GoogleMap, 
        withScriptjs, 
        withGoogleMap, 
        Marker
    } from 'react-google-maps';
// key: "AIzaSyAVTq9lBNRwnB0WhEQk7HsfWuYSGVOT3F0"

export default function Map(props) {

    useEffect(() => {
        fetchDetails();
    }, []);

    const [device, setDevice] = useState({
        location : {
            coordinates: {}
        },
    });

    const fetchDetails = async () => {

        const fetchDetails = await fetch(
            `http://localhost:3000/devices/${props.id}`
        );

        const info = await fetchDetails.json();
        setDevice(info);
    };

    const MapWrapped = withScriptjs(withGoogleMap( () => {
        return (
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{lat: device.location.coordinates[1], lng:  device.location.coordinates[0]}}
            >
                <Marker position={{lat: device.location.coordinates[1], lng: device.location.coordinates[0]}} />

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