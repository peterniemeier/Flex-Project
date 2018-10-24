import React, { Component } from 'react'
import { connect } from "react-redux";

export class SelectedToilet extends Component {
  render() {
    const toiletId = this.props.match.params.toiletId;
    const theToilet = this.props.toilets[toiletId];
    if (theToilet) {
      return (
        <div className='selected-toilet'>
          
        </div>
      );
    }
    return (
      <div>
        Selected Toilet is {toiletId}!
      </div>
    )
  }
}

const mDtP = dispatch => ({});

const mStP = state => ({
  toilets: state.entities.toilets,
});

export default connect(mStP, mDtP)(SelectedToilet);
