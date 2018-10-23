import React from 'react';
import "./main_page.css";
import "../../assets/stylesheets/shared.css";
import Map from '../maps/map';
import ToiletCreator from './toilet_creator';
import ToiletIndex from './toilet_show/toilet_index';
import SelectedToilet from './toilet_show/selected_toilet';
import { Route, Link, Switch } from "react-router-dom";

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
                    <Switch >
                        <Route path='/main/selected' component={SelectedToilet} />
                        <Route path='/main' component={ToiletIndex} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainPage;