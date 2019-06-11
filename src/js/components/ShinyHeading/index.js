import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class ShinyHeading extends Component{

  static propTypes = {
    heading : PropTypes.string.isRequired
  }

  render(){

    let innerHTML = `<symbol id="s-text">
            <text text-anchor="middle" x="50%" y="80%">${this.props.heading}</text>
        </symbol>
        <g class="g-ants">
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
        </g>`;
    return(
       <svg dangerouslySetInnerHTML={{__html: innerHTML}} viewBox="0 0 960 200">

        </svg>
    );
  }
}