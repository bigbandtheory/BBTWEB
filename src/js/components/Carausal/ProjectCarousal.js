import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import BaseCarousal from './BaseCarousal';
import NextArrow from './NextArrow';
import PrevArrow from './PreviousArrow';

export default class ProjectCarousal extends BaseCarousal{

    constructor(props){
      super(props);
    }

    static defaultProps = {
      slides: [],
      settings : {
        arrows : false,
        autoplay: true,
        dots: true
      }
    };

    get slides(){
        return this.props.slides.map((slide , index)=>{
             return(
                <div key={index} className="item" style={{
                               backgroundImage: `url(${slide.coverImage})`,
                               backgroundSize: 'cover',
                               backgroundPosition: '50% 50%'
                              }} />
             );
        });
    }
}