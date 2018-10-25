import React, { Component } from 'react'
import { connect } from 'react-redux'

import ToiletIndexItem from './toilet_index_item';


export class ToiletIndex extends Component {
  constructor(props) {
      super(props);
  }

  // componentDidMount() {

  // }

  render() {
    const { toilets } = this.props; 
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
