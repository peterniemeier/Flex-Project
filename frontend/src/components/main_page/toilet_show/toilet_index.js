import React, { Component } from 'react'
import { connect } from 'react-redux'

import ToiletIndexItem from './toilet_index_item';


export class ToiletIndex extends Component {
  constructor(props) {
      super(props);

      this.toilets = {
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
  }

  render() {
    // this will be const { toilets }  = this.props; once we can fetch toilets
    const toilets = this.toilets
    return (
      <ul>
          {Object.values(toilets).map(toilet => {
              return <ToiletIndexItem key={toilet.id} 
              toilet={toilet} history={this.props.history}/>
          })}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  toilets: state.entities.toilets,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ToiletIndex)
