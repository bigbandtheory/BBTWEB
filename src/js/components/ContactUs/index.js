import React,{Component, PropTypes} from 'react';
import Form from './form';
import {sendSubscriptionMessage} from '../../network';
import Button from '../Fields/Button';

export default class ContactUs extends Component{

  constructor(props){
    super(props);
    this.state = {
      contactData : {}
    }
  }

  onChangeHandler(event){
    let value = event.target.value;
    this.state.contactData[event.target.name] = value;
  }

  submitMessage(event){
    event.preventDefault();
    sendSubscriptionMessage(this.state.contactData);
  }


   render(){
     return(
        <div className="row pattern-black contact logo-container" id="contact">
          <div className="container">
                <h2 className="sectionTitle f-damion c-white mTop100">
                    Get in Touch!
                </h2>
                <h6 className="f-robotoSlab fw-400 c-turquoise t-center mBottom30">Be the first to know about our Events, Artist, Music</h6>
                <Form onChangeHandler={this.onChangeHandler.bind(this)}>
                    <Button onClick = {this.submitMessage.bind(this)} className="gradientButton pink inverse mTop50" label = "SEND MESSAGE"/>
                </Form>
          </div>
          <div className="container mTop50 mBottom50">
                <div className="col-lg-8 col-sm-10 col-centered">
                    <div className="col-lg-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-xs-12 t-center mBottom40">
                                <i className="flaticon-laptop15 c-pink iconSize45 mBottom20 hvr-buzz-out"></i>
                                <h6 className="f-raleway fw-700 c-white">E-Mail</h6>
                                <p className="c-lightGrey t-center"><a className="textButtonWhite" href="mailto:info@thebigbandtheory.net">info@thebigbandtheory.net</a></p>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12 t-center mBottom40">
                                <i className="flaticon-smart1 c-pink iconSize45 mBottom20 hvr-buzz-out"></i>
                                <h6 className="f-raleway fw-700 c-white">Phone</h6>
                                <p className="c-lightGrey t-center">+91-8882003835</p>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12 t-center mBottom40">
                                <i className="flaticon-open79 c-pink iconSize45 mBottom20 hvr-buzz-out"></i>
                                <h6 className="f-raleway fw-700 c-white">Address</h6>
                                <p className="c-lightGrey t-center">190 model colony araghar, <br/>Dehradun, Uttrakhand 248001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
   }
}