import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class AboutUs extends Component{

    constructor(props){
      super(props);
    }

    render(){
        return(
          <div className="row bg-white logo-container" id="about" style={{position: 'relative', overflow: 'hidden'}}>
            <div className="col-lg-7 col-sm-12 col-xs-12 p20 bg-white middleWrapper">
                <div className="pageImage">
                    <img src="https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/extras/bbt_logo_strip.jpg" alt="About"/>
                </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-xs-12 pLeft50 pRight50 middleWrapper">
                <h2 className="f-raleway fw-900 c-darkGrey">ORIGINAL IS GOOD</h2>
                <h5 className="f-robotoSlab fw-600 c-darkGrey">Big Band Theory is a <span className="c-red">music company</span> formed with the vision to promote the independent music circuit of the country.</h5>
                <p className="c-darkGrey">We work with artist and help them with their overall growth, helping them in increasing their value in the market.
                    We take the music to the right audiences. We call it band branding. Making band the brand.
                    We organize gigs at different venues and events. As curators, we work on the same theory of band branding. We study the audiences and demographics at different venues and accordingly program artists.
                    We launch music, build concepts and provide artists for venues & festivals.</p>
                <a className="signatureButton c-darkGrey" href="#"><h3>Contact Us Now</h3></a>
            </div>
          </div>
        );

    }
}

