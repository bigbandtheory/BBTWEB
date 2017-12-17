import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import BaseCarousal from './BaseCarousal';



export default class ProjectCarousal extends BaseCarousal{

    constructor(props){
      super(props);
    }

    static defaultProps = {
      slides: [],
      settings : {
        nav : true,
        navContainer : 'nav',
        navText: ['<a href="#" class="ps-prev"><span>PREV</span></a>','<a href="#" class="ps-next"><span>NEXT</span></a>']
      }
    }

    get slides(){
        return this.props.slides.map((project , index)=>{
         return(
            <div className="ps-content" style={{top: '100%', zIndex: 1}}>
              <h3 className="f-raleway">Watch Major Lazer Trace Their Roots</h3>
              <p>With restful springiness in the seat; prevents static sitting and provides enhanced seating comfort. Padded seat and back for enhanced seating comfort. Soft, hardwearing and easy care leather, which ages gracefully.</p>
              <a href="javascript();" className="textButtonWhite"><h5>Preview Artist</h5></a>
            </div>
          );
        });
    }
}