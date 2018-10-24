import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MarkerManager from './marker_manager';
import './maps.css';
import { receiveToiletPos } from '../../actions/map_actions';
// import { fetchToilets } from '../../actions/toilet_actions';



class Map extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        const google = window.google;
        // const { fetchToilets, toilets} = this.props;
        // if (google) {
            const mapOptions = {
                center: { lat: 37.7749, lng: -122.4194 },
                zoom: 12
            };
            this.map = new google.maps.Map(
                document.getElementById('map'),
                mapOptions);
    
            this.markerManager = new MarkerManager(this.map, this.props.history);
            this.map.addListener('click', this.handleMapClick.bind(this));
            this.map.addListener('idle', this.handleIdleMap.bind(this));
            // this.props.fetchToilets()
            // .then(() => {
            //     this.markerManager.createMarkers(toilets);
            // });
        // }
    }

    handleIdleMap(event) {
        const bounds = this.map.getBounds();
        const northEast = {
            lat: bounds.getNorthEast().lat(),
            lng: bounds.getNorthEast().lng(),
        };
        const southWest = {
            lat: bounds.getSouthWest().lat(),
            lng: bounds.getSouthWest().lng(),
        };
    }

    handleMapClick(event) {
        this.markerManager.removeLastMarker();
        this.markerManager.createMarker(event.latLng);
        this.props.receiveToiletPos({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
        document
          .getElementById("toilet-address")
          .classList.remove("error");
    }

    render() {
        return <div className='map' id='map'></div>;
    }
}

const mapStateToProps = state => ({
    toilets: state.entities.toilets,
});

const mapDispatchToProps = dispatch => ({
    receiveToiletPos: pos => dispatch(receiveToiletPos(pos))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));
