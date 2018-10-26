import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setCenter } from "../../actions/map_actions";

import './searchbar.css';

const google = window.google;

export class SearchBar extends Component {

    componentDidMount() {
        const input = document.getElementById('searchbar');
        this.autocomplete = new google.maps.places.Autocomplete(input);
    }

    search(event) {
        const { setCenter, history, match } = this.props;
        event.preventDefault();
        if (this.autocomplete.getPlace()) {
            const location = this.autocomplete.getPlace().geometry.location;
            const latLng = {
                lat: location.lat(),
                lng: location.lng(),
            }
            setCenter(latLng);
            if (match.path !== '/main/') {
                history.push('/main');
            }
        }
    }

    render() {
        return (
            <form className='search-bar'>
                <input className="searchbar" id='searchbar' placeholder="Find a Place To Rest Your Weary Bottom" />
                <i onClick={this.search.bind(this)} className="fas fa-search" />
            </form>
        )
    }
}

const mDtP = dispatch => ({
    setCenter: center => dispatch(setCenter(center)),
});

export default withRouter(connect(null, mDtP)(SearchBar));
