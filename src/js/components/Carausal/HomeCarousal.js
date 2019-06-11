import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import BaseCarousal from './BaseCarousal';


const mapStateToProps = (state)=>{
    return{
      slides: state.app.homeCarousal.slides
    }
};

const colors = ['yellow','red','blue'];

class HomeCarousal extends BaseCarousal{

    constructor(props){
      super(props);
    }

    static propTypes = {
      slides: PropTypes.array.isRequired,
      settings: PropTypes.object
    }

    get slides(){
      return this.props.slides.map((slide, index)=>{
         return(
             <div key={index} className="background-dark-gradient item">
               { slide.image && <img src={slide.image} /> }
               { slide.video && <video src={ slide.video } width="100%" height="100%" /> }
                   <div>
                       <div className="container scrollFade">
                           <div dangerouslySetInnerHTML={{ __html :  slide.innerContent }}>

                           </div>
                       </div>
                   </div>
             </div>
         );
      });
    }
}

export default connect(mapStateToProps)(HomeCarousal);
