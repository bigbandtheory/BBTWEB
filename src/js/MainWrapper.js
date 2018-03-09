import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Mp3Dock from './components/Mp3Dock';

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
           <HeaderBar />
           {this.props.children}
           <Mp3Dock />
        </div>
      );
    }
}

export default connect(mapStateToProps)(MainWrapper);