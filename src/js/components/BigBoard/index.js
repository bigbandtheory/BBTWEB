import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {lengthValidator} from '../../Utils/PropsValidator';
import classNames from 'classnames';

const position = ['left','top','right','bottom','left','top','right','bottom'];

export default class BigBoard extends Component{

  static propTypes = {
    title: lengthValidator,
  }
  constructor(props){
    super(props);
  }


  render(){

    return(
      <div className="row pattern-darkGrey logo-container">
        <ul className="letterWrapper">
          {
              this.props.title.split('').map((word , key)=>{
                return <li key={key} className={`ot-letter-${position[key]}`}><span data-letter={word}>{word}</span></li>
              })
          }
        </ul>
      </div>
    );

  }

}