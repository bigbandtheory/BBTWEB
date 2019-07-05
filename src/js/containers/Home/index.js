import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import HeaderBar from '../../components/HeaderBar';
import classNames from 'classnames';
import FastSlideShow from '../../components/FastSlideShow';
import HomeCarousal from '../../components/Carausal/HomeCarousal';
import AboutUs from '../../components/AboutUs'
import RedBanner from '../../components/RedBanner';
import BigBoard from '../../components/BigBoard';
import ArtistCarousal from '../../components/Artist/ArtistCarousal';
import WhatWeDo from '../../components/WhatWeDo';
import VideoBanner from '../../components/VideoBanner';
import FacebookFeeds from '../../components/SocialMediaFeeds/FacebookFeeds';
import Client from '../../components/Client';
import Events from '../../components/Events';
import ShinyHeading from '../../components/ShinyHeading';
import ContactUs from '../../components/ContactUs';
import 'jquery';
import 'react-perf-tool/lib/styles.css';

require('./index.css');

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

class Home extends Component{

    constructor(props){
       super(props);
    }

    render(){
      return (
         <div>
          <div className="icon-scroll scrollFade" style={{opacity: 1}}></div>
          <div className="row homeSlider logo-container">
            <HomeCarousal settings={{ autoPlay: true, dots: true }}/>
          </div>
          <FastSlideShow {...this.props}>
            <div className="container hs-links">
                <div className="col-lg-3 col-sm-3 col-xs-3 xHoverLink">
                    <a href="#portfolio" className="f-raleway fw-700 c-white">Our Portfolio</a>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-3 xHoverLink">
                    <a href="#events" className="f-raleway fw-700 c-white">Our Events</a>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-3 xHoverLink">
                    <a href="#shop" className="f-raleway fw-700 c-white">Our Team</a>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-3 xHoverLink">
                    <a href="#contact" className="f-raleway fw-700 c-white">Contact Us</a>
                </div>
            </div>
          </FastSlideShow>
          <AboutUs />
          <RedBanner>
            <div className="container pTop60 pBottom40 t-center">
                <h6 className="f-robotoSlab fw-600 c-white">If you like it, get in touch here</h6>
                <h3 className="f-damion fw-400 c-white mTop5">Let's start your project now!</h3>
                <div className="mTop30"><i className="flaticon-chat73 iconSize60 c-white hvr-wobble-to-top-right"></i></div>
            </div>
          </RedBanner>
          <BigBoard title="ARTISTS" />
          <ArtistCarousal />
          <WhatWeDo />
          <VideoBanner className="our-video" videoSources={this.props.socialVideos}>
            <FacebookFeeds />
          </VideoBanner>
          <Client />
          <Events />
          <VideoBanner className = "textAnimate" theme="black" videoSources={this.props.contactVideos}>
            <div className="container vertical-middle t-center">
              <ShinyHeading heading="COLLABORATE" />
              <a href="#" className="gradientButton yellow">CONTACT US</a>
            </div>
          </VideoBanner>
          <ContactUs />

        </div>
      );
    }
}

export default connect(mapStateToProps)(Home);