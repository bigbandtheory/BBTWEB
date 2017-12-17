import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import ArtistSlider from '../Slider/ArtistSlider';

const mapStateToProps = (state)=>{
  return {
    slides : state.artist.carousal.slides,
    imageSlides : state.artist.carousal.images
  };
};

class ArtistCarousal extends Component{

   static defaultProps = {
     slides: [],
     imageSlides: []
   }


    render(){
     return(
       <div className="row pattern-black logo-container" id="portfolio" style={{position: 'relative' , overflow: 'hidden'}}>
         { this.props.slides.length > 0 && <ArtistSlider {...this.props} /> }
       </div>
     );
    }
}

export default connect(mapStateToProps)(ArtistCarousal);