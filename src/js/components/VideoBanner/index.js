import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classNames from  'classnames';

export default class VideoBanner extends Component{


  static propTypes = {
    videoSources : PropTypes.array.isRequired,
    theme : PropTypes.string
  }

  static defaultProps = {
    theme : 'white'
  }
  constructor(props){
    super(props);
  }

  render(){

   let cls = classNames({
     'row video logo-container' : true,
     'pattern-white' : this.props.theme === 'white',
     'pattern-black' : this.props.theme === 'black',
   });
   cls = cls + ` ${this.props.className}`
    return(
      <div className={cls} style={{position: 'relative', overflow: 'hidden'}}>
        <video autoPlay loop>
               {
                 this.props.videoSources.map((source , index)=>{
                   return <source key={index} src={source.url} type={source.type} />
                 })
               }
        </video>
        {this.props.children}
       </div>
    );
  }

}
