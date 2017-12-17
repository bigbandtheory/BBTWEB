import React,{Component,PropTypes} from 'react';


export default class AboutUs extends Component{

    constructor(props){
      super(props);
    }

    render(){
        return(
          <div className="row bg-white logo-container" id="about" style={{position: 'relative', overflow: 'hidden'}}>
            <div className="col-lg-7 col-sm-12 col-xs-12 p20 bg-white middleWrapper">
                <div className="pageImage">
                    <img src="https://scontent.fdel1-1.fna.fbcdn.net/v/t31.0-8/15874775_599545063585852_5769838704817646960_o.jpg?oh=a14e5a2df56b6b892595f5617f96a327&oe=5ACFFF32" alt="About"/>
                </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-xs-12 pLeft50 pRight50 middleWrapper">
                <h2 className="f-raleway fw-900 c-darkGrey">ORIGINAL IS GOOD</h2>
                <h5 className="f-robotoSlab fw-600 c-darkGrey">Nullam felis metus, elementum in ante et, consequat malesuada turpis. Sed semper dolor nec lacus consectetur dignissim.</h5>
                <p className="c-darkGrey">Cras arcu enim, pulvinar sit amet sodales eu, <mark>default mark text.</mark> Curabitur placerat, enim an elementum, dolor eros rhoncus lacus, varius dictum velit turpis
                &nbsp;<span className="c-red">red highlight text</span> vel nisi. Nullam felis metus, elementum in ante et, consequat malesuada turpis. Sed semper dolor nec lacus. Maecenas tristique libero ac urna bibendum, quis blandit sem sodales.</p>
                <a className="signatureButton c-darkGrey" href="#"><h3>Contact Us Now</h3></a>
            </div>
          </div>
        );

    }
}

