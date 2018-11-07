import React, { Component } from 'react'
import Creator from './creator';
import '../../assets/stylesheets/shared.css';
import './creator.css';

export class CreatorsPage extends Component {
  render() {
    const creators = [
      {
        name: 'Austin', 
        github: '',
        angel: '',
        portfolio: '',
        linkedin: '',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/003/013/medium/Austin_Cotant_.jpg?1534882621'
    },
      {
        name: 'Peter', 
        github: '',
        angel: '',
        portfolio: '',
        linkedin: '',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/973/medium/Peter_Neimeier_2.jpg?1534890984'
    },
      {
        name: 'Anthony', 
        github: '',
        angel: '',
        portfolio: '',
        linkedin: '',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/966/medium/Anthony_Tam.jpg?1534882601'
    },
      {
        name: 'James', 
        github: '',
        angel: '',
        portfolio: '',
        linkedin: '',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/972/medium/James_Touri.jpg?1534886869'
    },
    ]
    return (
      <div className='all-content creators'>
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
