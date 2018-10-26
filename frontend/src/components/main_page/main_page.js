import React from 'react';
import "./main_page.css";
import "../../assets/stylesheets/shared.css";
import { Route, Switch } from "react-router-dom";

import Map from '../maps/map';
import ToiletCreator from './toilet_creator';
import ToiletIndex from './toilet_show/toilet_index';
import SelectedToilet from './toilet_show/selected_toilet';
import SearchBar from '../splash/search_bar';

class MainPage extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <div className='search-container-main'>
                    <SearchBar />
                </div>
                <div className='all-content'>
                    <div className='big-map'>
                        <Map history={history}/>
                    </div>
                    <div className='toilet-sidebar'>
                        <ToiletCreator history={history}/>
                        <Switch >
                            <div className='toilet-index'>
                                <Route path='/main/:toiletId' history={history}
                                    component={SelectedToilet} toilets={this.props.toilets}/>
                                <Route path='/main' component={ToiletIndex} history={history}/>
                            </div>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
