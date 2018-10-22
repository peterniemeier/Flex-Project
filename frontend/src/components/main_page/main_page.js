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
            </div>
        );
    }
}

export default MainPage;