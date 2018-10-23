import React from 'react';
import { connect } from 'react-redux';

import {receiveToiletPos} from '../../actions/map_actions';

class ToiletCreator extends React.Component {

    setMyLocation(event) {
        const {toiletPos, receiveToiletPos} = this.props
        event.preventDefault();
        let latLng;
        navigator.geolocation.getCurrentPosition(pos => {
            latLng = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            }
            receiveToiletPos(latLng)
            this.props.history.push('/toilets/create')
        })
    }

    sendToiletLocation(event) {
        this.props.history.push('/toilets/create')
    }



    render() {
        return (
            <div>
                <button onClick={this.setMyLocation.bind(this)}>Create Toilet at my location</button>
                <button onClick={this.sendToiletLocation.bind(this)}>Create toilet at clicked location</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    toiletPos: state.ui.maps.toiletPos,
})

const mapDispatchToProps = dispatch => ({
    receiveToiletPos: pos => dispatch(receiveToiletPos(pos)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToiletCreator);