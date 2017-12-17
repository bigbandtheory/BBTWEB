import React,{Component,PropTypes} from 'react';
import {Provider,connect} from 'react-redux';
import HeaderBar from './components/HeaderBar';
import store from './redux/store';
import MainWrapper from './MainWrapper';
import * as actions from './redux/Actions';


class App extends Component{

    constructor(props){
      super(props);
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
           <MainWrapper />
         </Provider>
      );
    }

}

export default App;