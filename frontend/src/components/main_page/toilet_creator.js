import React from 'react';
import { connect } from 'react-redux';

import {receiveToiletPos, receiveToiletAddress} from '../../actions/map_actions';
import { fetchAddress } from '../../util/map_api_util';

class ToiletCreator extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentAddress: 'Loading your location!',
            toiletAddress: 'Click the map!',
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            const latLng = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            };
            fetchAddress(latLng)
            .then(res => {
                this.setState({currentAddress: res.results[0].formatted_address});
            })
        })
    }

    setMyLocation(event) {
        const {receiveToiletPos, receiveToiletAddress} = this.props
        event.preventDefault();
        let latLng;
        navigator.geolocation.getCurrentPosition(pos => {
            latLng = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            }
            receiveToiletPos(latLng)
            fetchAddress(latLng)
            .then(res => {
                receiveToiletAddress(res.results[0].formatted_address);})
            .then(() => 
                this.props.history.push('/toilets/new'));
        })
    }

    sendToiletLocation(event) {
        const {toiletPos, receiveToiletAddress} = this.props;
        if (toiletPos) {
            fetchAddress(toiletPos)
                .then(res => {
                    receiveToiletAddress(res.results[0].formatted_address);})
                .then(() =>
                    this.props.history.push('/toilets/new'));
        } else {
            document.getElementById('toilet-address').classList.add('error');
        }
    }

    componentWillReceiveProps(nextProps) {
        const { toiletPos } = nextProps;
        if (toiletPos) {
            fetchAddress(toiletPos)
            .then(res => {
              this.setState({ toiletAddress: res.results[0].formatted_address});
            })
        }
    }


    render() {
        return (
            <div className='toilet-create-buttons'>
                <div className='button-row'>
                    <button className='btn btn-secondary'
                        onClick={this.setMyLocation.bind(this)}>
                        Create Toilet at my location</button>
                    <p>{this.state.currentAddress}</p>
                </div>
                <div className='button-row'>
                    <button className='btn btn-secondary'
                        onClick={this.sendToiletLocation.bind(this)}>
                        Create toilet at clicked location</button>
                    <p id='toilet-address'>{this.state.toiletAddress}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    toiletPos: state.ui.maps.toiletPos,
})

const mapDispatchToProps = dispatch => ({
    receiveToiletPos: pos => dispatch(receiveToiletPos(pos)),
    receiveToiletAddress: address => dispatch(receiveToiletAddress(address)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToiletCreator);
