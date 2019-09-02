import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component{

  render(){
    return(
      <div className="row footer logo-container pattern-darkGrey">

        <div className="col-lg-12 col-sm-12 col-xs-12 footer-top pattern-grey">
            <div className="container">
                <div className="col-lg-3 col-sm-3 col-xs-12 footer-top-menu">
                    <h6 className="f-raleway">WHO WE ARE?</h6>
                    <ul>
                        <li><a href="#about-us">About Us</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-12 footer-top-menu">
                    <h6 className="f-raleway">INFORMATIONS</h6>
                    <ul>
                        <li><a href="#">Our Portfolio</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-12 footer-top-menu">
                    <h6 className="f-raleway">LEARN MORE</h6>
                    <ul>
                        <li><a href="#events">Events</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-12 footer-top-menu">
                    <h6 className="f-raleway">ABOUT BBT</h6>
                    <p>Big band theory is independent music curation organization.</p>
                </div>
            </div>
        </div>
        <div className="container scroll t-center mBottom50">
            <div className="col-lg-12 col-sm-12 col-xs-12">
                <a href="#top" className="scrollToTop"></a>
            </div>
        </div>
        <div className="container t-center mBottom20 mTop80">
            <div className="col-lg-2 col-sm-4 col-xs-8 col-centered">
                <div className="col-lg-12 col-sm-12 col-xs-12 footerLogo">

                </div>
            </div>
        </div>
        <div className="container">
            <ul className="social mBottom40 mTop20">
                <li className="twitter"><a target="_blank" href="https://twitter.com/bbt85" aria-hidden="true" className="icon icon-twitter"></a><span className="tooltip">Twitter</span></li>
                <li className="facebook"><a target="_blank" href="https://www.facebook.com/musictbbt" aria-hidden="true" className="icon icon-facebook"></a><span className="tooltip">Facebook</span></li>
                <li className="youtube"><a target="_blank" href="#" aria-hidden="true" className="icon icon-youtube"></a><span className="tooltip">Youtube</span></li>
                <li className="linkedin2"><a target="_blank" href="https://www.linkedin.com/company/13243784" aria-hidden="true" className="icon icon-linkedin2"></a><span className="tooltip">Linkedin</span></li>
                <li className="soundcloud"><a target="_blank" href="https://soundcloud.com/thebigbandtheorymusic" aria-hidden="true" className="icon icon-soundcloud"></a><span className="tooltip">Soundcloud</span></li>
            </ul>
        </div>
        <div className="container">
            <h6 className="c-white t-center f-raleway fw-800">ALL RIGHTS RESERVED / BIG BAND THEORY 2016</h6>
        </div>
      </div>

    );
  }
}