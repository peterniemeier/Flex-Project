import React from 'react';
import "./main_page.css";
import Map from '../maps/map';

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
                    <button>Create Toilet at my location</button>
                    <button>Create button at clicked location</button>
                </div>
            </div>
        );
    }
}

export default MainPage;