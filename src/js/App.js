import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Provider,connect} from 'react-redux';
import store from './redux/store';
import * as actions from './redux/Actions';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {createBrowserHistory} from 'history';
import Routes from './Routes';


class App extends Component{

    constructor(props){
      super(props);
    }

    componentWillMount(){
        const browserHistory = createBrowserHistory();
        this.history = syncHistoryWithStore(browserHistory, store);
    }

    componentDidMount(){
      store.dispatch(actions.featuredClient());
      store.dispatch(actions.getAllEvents());
      store.dispatch(actions.artistCarousal());
      store.dispatch(actions.featuredTracks());
      store.dispatch(actions.featuredVideos());
    }

    render(){
      return(
         <Provider store={store}>
            <Router history={this.history}>
                <Routes />
            </Router>
         </Provider>
      );
    }

}

export default App;