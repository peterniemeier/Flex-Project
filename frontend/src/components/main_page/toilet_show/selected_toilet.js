import React, { Component } from 'react'
import { connect } from "react-redux";

export class SelectedToilet extends Component {
  render() {
    const toilets = {
      1: {
        id: 1,
        address: '825 Battery St, San Francisco, CA 94111, USA',
        title: 'a/A toilet yo!',
      },
      2: {
        id: 2,
        address: '865 Battery St, San Francisco, CA 94111, USA',
        title: 'better a/A toilet yo!',

      }
    }
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
