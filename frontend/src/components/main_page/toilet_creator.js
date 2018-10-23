import React from 'react';
import { connect } from 'react-redux';

import {receiveToiletPos} from '../../actions/map_actions';
import { fetchAddress } from '../../util/map_api_util';

class ToiletCreator extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            currentAddress: '',
            toiletAddress: '',
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            const latLng = `${pos.coords.latitude},${pos.coords.longitude}`
            fetchAddress(latLng)
            .then(res => {
                this.setState({currentAddress: res.results[0].formatted_address});
            }) 
        })
    }

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

    componentWillReceiveProps(nextProps) {
        const { toiletPos } = nextProps;
        if (toiletPos) {
            const latLng = `${toiletPos.lat},${toiletPos.lng}`;
            fetchAddress(latLng)
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
                    <p>{this.state.toiletAddress}</p>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ToiletCreator);