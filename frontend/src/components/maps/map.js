import React from 'react';
import MarkerManager from './marker_manager';
import './maps.css';

const google = window.google;

class Map extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7749, lng: -122.4194 },
            zoom: 12
        };
        this.map = new google.maps.Map(
            document.getElementById('map'),
            mapOptions);

        this.markerManager = new MarkerManager(this.map)
        this.map.addListener('click', this.handleMapClick.bind(this));
    }

    handleMapClick(event) {
        console.log(event.latLng);
        this.markerManager.createMarker(event.latLng);
    }

    render() {
        return <div className='map' id='map'></div>;
    }
}

export default Map;