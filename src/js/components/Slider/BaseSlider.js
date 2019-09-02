import React,{Component} from 'react';
import PropTypes from 'prop-types';

import '../../../assets/styles/css/vertical-showcase.css';
import classNames from 'classnames';

export default class BaseSlider extends Component{

  static defaultSettings = {

  }

  constructor(props){
    super(props);

    const settings = {
      ...this.constructor.defaultSettings,
      ...this.props.settings
    }
    this.state = {
       settings: settings,
       isPrevHover : false,
       isNextHover : false,
       currentIndex : 0
    }
  }



  get imageSlides(){
     return(<span >Implement the imageSlides method to support for image/'s slides.</span>);
  }

  get contentSlides(){
     return(<span >Implement the contentSlides method to support for content/'s slides.</span>);
  }

  goToNext(e){
     e.preventDefault();
     if(this.props.slides.length - 1 >  this.state.currentIndex){
       ++ this.state.currentIndex;
     }else{
       this.state.currentIndex = 0;
     }
     this.setState({currentIndex : this.state.currentIndex});
  }

  goToPrev(e){
     e.preventDefault();
     if(this.state.currentIndex > 0){
       -- this.state.currentIndex;
     }else{
       this.state.currentIndex = this.props.slides.length - 1;
     }
     this.setState({currentIndex : this.state.currentIndex});
  }


  get navigation(){

    let prevBtnCls = classNames({
      'ps-prev' : true,
      'prevHover': this.state.isPrevHover === true
    });

    let nextBtnCls = classNames({
      'ps-next' : true,
      'nextHover': this.state.isNextHover === true
    });

    return(
      <nav>
        <a onClick={this.goToPrev.bind(this)} onMouseLeave={()=> this.setState({ isPrevHover : false})} onMouseOver={(e)=> this.setState({ isPrevHover : true})} ref={(x) => this.prevBtn = x} className={prevBtnCls}><span>PREV</span></a>
        <a onClick={this.goToNext.bind(this)} onMouseLeave={()=> this.setState({ isNextHover : false})} onMouseOver={(e)=> this.setState({ isNextHover : true})} ref={(x) => this.nextBtn = x} className={nextBtnCls}><span>NEXT</span></a>
        <div className="point"></div>
      </nav>
    );
  }

  render(){
     return(
       <div ref={(x)=>this.container = x} id="ps-container" className="ps-container">
        <div className="ps-contentwrapper">
          {this.navigation}
          {this.contentSlides}
        </div>
        <div ref={(x) => this.slideWrapper = x} className="ps-slidewrapper">
          <div ref={(x) => this.slidesContainer=x} className="ps-slides">
            {this.imageSlides}
          </div>
        </div>
       </div>
     );

  }
}



