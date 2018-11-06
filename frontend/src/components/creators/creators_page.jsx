import React, { Component } from 'react'
import Creator from './creator';
import '../../assets/stylesheets/shared.css';

export class CreatorsPage extends Component {
  render() {
    const creators = [
      {
        name: 'Austin', 
        github: '',
        angel: '',
        linkedin: '',
        imgUrl: ''
    },
      {
        name: 'Peter', 
        github: '',
        angel: '',
        linkedin: '',
        imgUrl: ''
    },
      {
        name: 'Anthony', 
        github: '',
        angel: '',
        linkedin: '',
        imgUrl: ''
    },
      {
        name: 'James', 
        github: '',
        angel: '',
        linkedin: '',
        imgUrl: ''
    },
    ]
    return (
      <div className='all-content content'>
        <ul>
          {creators.map(creator => (
            <Creator creator={creator} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CreatorsPage
