import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/shared.css';

export class SelectedToilet extends Component {
  render() {
    const toiletId = this.props.match.params.toiletId;
    const theToilet = this.props.toilets[toiletId];
    if (theToilet) {
      let rating = theToilet.rating 
      if (rating) {
        rating = `rating: ${rating}`
      } else {
        rating = 'Be the first to rate this Toilet!'
      }
      return (
        <div className='selected-toilet'>
          <Link to={`/toilets/${theToilet._id}`} >
            <h1>{theToilet.title}</h1>
          </Link>
          <h3>{theToilet.address}</h3>
          <p>{rating}</p>
          <Link to={`/toilets/${theToilet._id}`} 
            className='btn-link'>Show me the Details</Link>
        </div>
      );
    }
    return (
      <div>
        'Loading the Toilet'
      </div>
    )
  }
}

const mDtP = dispatch => ({});

const mStP = state => ({
  toilets: state.entities.toilets,
});

export default connect(mStP, mDtP)(SelectedToilet);
