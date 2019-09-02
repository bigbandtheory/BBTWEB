import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import BaseCarousal from './BaseCarousal';


const mapStateToProps = (state)=>{
    return{
      slides: state.app.homeCarousal.slides
    }
};

class HomeCarousal extends BaseCarousal{

    constructor(props){
      super(props);
      const shouldSlide = props.slides.length !== 1;
      this.state.settings.dots = shouldSlide;
      this.state.settings.infinite = shouldSlide;
    }

    static propTypes = {
      slides: PropTypes.array.isRequired,
      settings: PropTypes.object
    };

    get slides(){
      return this.props.slides.map((slide, index)=>{
         return(
             <div key={index} className="background-dark-gradient item">
               { slide.image && <img src={slide.image}  /> }
               { slide.video && <video controls src={ slide.video } width="100%" height="100%" /> }
                   <div>
                       <div className="container scrollFade">
                           <div dangerouslySetInnerHTML={{ __html :  slide.innerContent }} />
                       </div>
                   </div>
             </div>
         );
      });
    }
}

export default connect(mapStateToProps)(HomeCarousal);
