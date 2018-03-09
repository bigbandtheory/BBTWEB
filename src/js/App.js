import React,{Component,PropTypes} from 'react';
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