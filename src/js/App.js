import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import * as actions from './redux/Actions';
import { Router }  from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createMemoryHistory } from 'history';
import Routes from './Routes';



class App extends Component{

    constructor(props){
      super(props);
    }

    componentWillMount(){
        const browserHistory = createMemoryHistory({
            initialEntries: ['/']
        });
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