import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import Home from './containers/Home';
import classNames from 'classnames';

const mapStateToProps = (state) => {

   return {
     open: state.app.open,
     loading: state.app.loading,
     openSearchBox: state.app.openSearchBox,
     slides : state.app.aboutUs.slides,
     socialVideos : state.app.socialBannerVideos,
     contactVideos : state.app.contactVideos
   };
};

class MainWrapper extends Component{

    constructor(props){
       super(props);
    }

    get classNames(){
       return classNames({
         'main-wrapper' : true,
         'show-menu' : this.props.open === true,
         'show-search' : this.props.openSearchBox === true
       });
    }

    render(){
      let wrapperClass = this.classNames;
      return (
        <div className={wrapperClass}>
           <Home />
        </div>
      );
    }
}

export default connect(mapStateToProps)(MainWrapper);