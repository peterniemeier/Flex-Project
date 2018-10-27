import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MarkerManager from './marker_manager';
import './maps.css';
import { receiveToiletPos } from '../../actions/map_actions';
import { fetchToilets } from '../../util/toilet_api_util';


const google = window.google;

class Map extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const { fetchToilets, maps} = this.props;
        // if (google) {
            const mapOptions = {
                center: maps.center,
                zoom: 12
            };
            this.map = new google.maps.Map(
                document.getElementById('map'),
                mapOptions);

            this.markerManager = new MarkerManager(this.map, this.props.history);
            this.map.addListener('click', this.handleMapClick.bind(this));
            this.map.addListener('idle', this.handleIdleMap.bind(this));
            fetchToilets()
            .then(() => {
                this.markerManager.createMarkers(this.props.toilets);
                const toiletId = this.props.match.params.toiletId;
                if (toiletId) {
                const pos = { lat: this.props.toilets[toiletId].lat, lng: this.props.toilets[toiletId].lng };
                this.map.setZoom(17);
                this.map.setCenter(pos);
                }
            });
        // }
    }

    componentWillReceiveProps(nextProps) {
        const { maps } = this.props;
        const toiletId = nextProps.match.params.toiletId;
        if (toiletId && toiletId !== this.props.match.params.toiletId) {
            const pos = { lat: this.props.toilets[toiletId].lat, lng: this.props.toilets[toiletId].lng };
            this.map.setZoom(17);
            this.map.setCenter(pos);
        }
        if (maps.center !== nextProps.maps.center) {
            this.map.setCenter(nextProps.maps.center)
        }
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
    maps: state.ui.maps,
});

const mapDispatchToProps = dispatch => ({
    receiveToiletPos: pos => dispatch(receiveToiletPos(pos)),
    fetchToilets: () => dispatch(fetchToilets()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));
