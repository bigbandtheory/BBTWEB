import React from 'react';
import { BrowserRouter, Route,IndexRoute, Switch, Link } from 'react-router-dom';
import Home from '../containers/Home';
import MainWrapper from '../MainWrapper';
import ArtistDetail from '../containers/PortfolioDetail/Artist';
import Artists from '../containers/Artists';

export default () => {
 return (
   <BrowserRouter>
       <Switch>
            <MainWrapper>
                <Route exact path='/' component={Home} />
                <Route path='/artists' component={Artists} />
               {/* <Route component={} />*/}
            </MainWrapper>
       </Switch>
   </BrowserRouter>
 )
}

