import React from 'react';
import "./main_page.css";
import Map from '../maps/map';
import ToiletCreator from './toilet_creator';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='all-content'>
                <div className='big-map'>
                    <Map />
                </div>
                <div className='toilet-index'>
                    <ToiletCreator history={this.props.history}/>
                </div>
            </div>
        );
    }
}

export default MainPage;