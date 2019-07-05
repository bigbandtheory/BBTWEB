import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Home from '../containers/Home';
import MainWrapper from '../MainWrapper';
import ArtistDetail from '../containers/PortfolioDetail/Artist';
import Artists from '../containers/Artists';

export default () => {
    return (
        <Switch>
            <MainWrapper>
                <Route exact path='/' component={Home}/>
                <Route path='/artists' component={Artists}/>
                <Route path='/artists/:id' component={ArtistDetail}/>
            </MainWrapper>
        </Switch>
    )
}

