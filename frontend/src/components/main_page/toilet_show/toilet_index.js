import React, { Component } from 'react'
import { connect } from 'react-redux'

import ToiletIndexItem from './toilet_index_item';

export class ToiletIndex extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className='toilet-index'>
        <ul>
            {Object.values(this.props.toilets).map(toilet => {
                return <ToiletIndexItem key={toilet.id} 
                toilet={toilet} />
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  toilets: state.entities.toilets,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ToiletIndex)
