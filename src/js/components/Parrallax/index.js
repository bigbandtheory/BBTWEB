import React,{Component,PropTypes} from 'react';


export default class Parrallax extends Component{

  static propTypes = {
    backgroundImage : PropTypes.string.isRequired,

  }


  render(){

    return(
      <div className={`parallax ${this.props.className}`} style={{backgroundImage: `url(${this.props.backgroundImage})`}}>
          {this.props.children}
      </div>
    );
  }

}