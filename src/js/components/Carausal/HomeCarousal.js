import React,{PropTypes} from 'react';
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
             <div key={index} className="item" style={{
               backgroundImage: `url(${slide.image})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
               }}>
                   <div>
                       <div className="container scrollFade">
                           <div>
                               <i className="flaticon-glamour c-yellow"></i>
                               <h1 className="f-raleway c-white fw-900">creative world<br />of new possibilities</h1>
                               <h6 className="f-robotoSlab c-lightGrey fw-400 mTop25">Celis metus, elementum in ante et</h6>
                               <h3 className="f-damion c-yellow fw-400">Nullam felis elementum!</h3>
                           </div>
                       </div>
                   </div>
             </div>


         );
      });
    }
}

export default connect(mapStateToProps)(HomeCarousal);
