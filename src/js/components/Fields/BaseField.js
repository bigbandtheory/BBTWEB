import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {errorMessages} from './ErrorMessages';
import {keys, first, pickBy} from 'lodash';

export default class BaseField extends Component{

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  static defaultProps = {

    required: false,
    pattern: '.*',
    autoFill : true
  }

  constructor(props) {
    super(props);
    this.controlNode = null;
    this.state = {
      errorMessage: undefined,
      outerWrapperClass : 'input input--kozakura',
    };
    this.getErrorMessages = this.getErrorMessages.bind(this);
  }

  get el(){
    return <span ref={ (x) => this.controlNode = x}>Configure by implementing BaseField get el method.</span>
  }


  setErrorMessage() {
    setTimeout(()=>{
      let errorMessage = undefined ;
      if(!this.controlNode.validity.valid){
          let validity = Object.assign(this.controlNode.validity);
          let key = first(keys(pickBy(validity , (value , key) =>{
              if(key !== 'customError'){
                return value === true;
              }
          })));
          let errorMessages = this.getErrorMessages();
          errorMessage = errorMessages[key] || this.controlNode.validationMessage;
      }
      this.setState({
          errorMessage: errorMessage
      });
    },250);
  }

  getErrorMessages(){
    if(!this.props.name){
      console.warn('Please provide name with the field');
    }
    let messages = errorMessages[this.props.name];
    return messages !== undefined ? messages.errorMessages : this.props.errorMessages;
  }

  removeErrorMessage(){
     this.setState({
        errorMessage: undefined
     });
  }
  onChange(event) {
    this.setErrorMessage(event);
  }

  onBlur(event) {
    if(!this.controlNode.value){
      this.setState({
        outerWrapperClass: 'input input--kozakura'
      });
    }else{
       this.setState({
         outerWrapperClass: 'input input--kozakura input--filled'
       });
    }
    this.setErrorMessage(event);
  }

  onFocus(event){
    this.setState({
      outerWrapperClass: 'input input--kozakura input--filled'
    });
    this.removeErrorMessage(event);
  }

  render(){

     let errorMessage;
     if (this.state.errorMessage) {
        let msg = this.state.errorMessage.charAt(0).toUpperCase() + this.state.errorMessage.slice(1);
        errorMessage = (
          <div className={`${this.errorMessageClass}-wrapper`}>
            <span
              className="text-danger"
              dangerouslySetInnerHTML={{__html: msg}} />
          </div>
        );
     }

     return(
       <span style={{height :'auto', minHeight: 120}} className={this.state.outerWrapperClass}>

         {this.el}
         <label className="input__label input__label--kozakura" htmlFor="input-9">
         <span className="input__label-content input__label-content--kozakura" data-content={this.props.label}>{this.props.label}</span>
         </label>
         <svg className="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
             <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
         </svg>
         {errorMessage}

        </span>
     );

  }

}