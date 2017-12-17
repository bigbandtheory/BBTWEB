import React,{Component, PropTypes} from 'react';
import Tabs from '../TabPills/Tabs';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{

  return {
    menus : state.app.whatWeDo.menus,
    contents : state.app.whatWeDo.contents
  };
};

class WhatWeDo extends Component{

   static propTypes={
     menus : PropTypes.array.isRequired,
     contents: PropTypes.array.isRequired
   }

   render(){
     return(
       <div className="row pattern-darkGrey logo-container" style={{position: 'relative',overflow: 'hidden'}}>
         <div className="container mBottom100">
            <h2 className="sectionTitle f-damion c-white">
                What We Do?
            </h2>
            <Tabs {...this.props} />
         </div>
       </div>
     );
   }
}

export default connect(mapStateToProps)(WhatWeDo);