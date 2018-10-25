import React, { Component } from 'react'
import { connect } from "react-redux";

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
          <h1>{theToilet.title}</h1>
          <h3>{theToilet.address}</h3>
          <p>{rating}</p>
          <button>Show me the Details</button>
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
