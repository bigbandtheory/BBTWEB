import React, { Component, PropTypes} from 'react';
import classNames from  'classnames';

export default class Card extends Component{

  static propTypes = {
    item : PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      hover : false
    }
  }

  handleHover(toggle){
    this.setState({hover : toggle});
  }

  render(){

    let cls = classNames({
      'client card' : true,
      'flipped' : this.state.hover === true
    });
    return(
      <div className="col-lg-3 col-sm-4 col-xs-6 flip" onMouseEnter={this.handleHover.bind(this, true)} onMouseLeave={this.handleHover.bind(this, false)}>
         <div className={cls} >
            <div className="face front"><img src={this.props.item.image} /></div>
            <div className="face back"><h6>{this.props.item.name}</h6></div>
         </div>
       </div>
    );
  }
}
