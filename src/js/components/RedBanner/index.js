import React,{Component,PropTypes} from 'react';

export default class RedBanner extends Component{

    render(){
      return(
        <div className="row bg-red p0 pattern-red logo-container" style={{position: 'relative', overflow: 'hidden'}}>
            <div className="logo moveable-logo" style={{position: 'absolute', top: -126}}>
                <a href="javascript:;">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>
            </div>
            {this.props.children}
        </div>
      );
    }
}