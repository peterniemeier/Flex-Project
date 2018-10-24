import React from 'react';
import "./main_page.css";
import "../../assets/stylesheets/shared.css";
import { Route, Link, Switch } from "react-router-dom";

import Map from '../maps/map';
import ToiletCreator from './toilet_creator';
import ToiletIndex from './toilet_show/toilet_index';
import SelectedToilet from './toilet_show/selected_toilet';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { history } = this.props;
        return (
            <div className='all-content'>
                <div className='big-map'>
                    <Map />
                </div>
                <div className='toilet-index'>
                    <ToiletCreator history={history}/>
                    <Switch >
                        <Route path='/main/:toiletId' history={history}
                            component={SelectedToilet} toilets={this.props.toilets}/>
                        <Route path='/main' component={ToiletIndex} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainPage;