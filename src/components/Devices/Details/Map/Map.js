import React from 'react';
import {GoogleMap, 
        withScriptjs, 
        withGoogleMap, 
        Marker
    } from 'react-google-maps';
// key: "AIzaSyAVTq9lBNRwnB0WhEQk7HsfWuYSGVOT3F0"

const map = (props) => {

    const MapWrapped = withScriptjs(withGoogleMap( () => {
        return (
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{lat: props.coordinates[1], lng:  props.coordinates[0]}}
            >
                <Marker position={{lat: props.coordinates[1], lng: props.coordinates[0]}} />

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

export default map;