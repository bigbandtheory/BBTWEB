import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '../Fields/TextField';

export default class Form extends Component{

  static propTypes ={
    onChangeHandler : PropTypes.func.isRequired
  }


  render(){

    return(
     <form>
      <div className="col-lg-8 col-centered">
        <div className="col-lg-6">
            <TextField name="name" label="Name" required={true} onChangeHandler = {this.props.onChangeHandler}/>
        </div>
        <div className="col-lg-6">
            <TextField name="email" type="email" label="Email" required={true} onChangeHandler = {this.props.onChangeHandler}/>
        </div>
      </div>
      <div className="col-lg-10 col-centered">
        <div className="col-lg-12">
           <TextField name="message" label="Message" required={true} onChangeHandler = {this.props.onChangeHandler}/>
        </div>
       </div>
       {this.props.children}
     </form>
    )
  }


}