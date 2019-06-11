import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MusicPlayer from '../MusicPlayer';
import {connect} from 'react-redux';
import {toggleMusicPlayer} from '../../redux/Actions';


const mapStateToProps = (state) => {

  return {
    open : state.musicPlayer.open
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    onClick : function(open){
       dispatch(toggleMusicPlayer(!open));
    }
  };
};

class Mp3Dock extends Component {

  constructor(props){
    super(props);
  }

  static defaultProps ={
     open : false
  }

  render(){
     let wrapperCls= classnames({
        'music-bar  pattern-grey' : true,

     });
     let iconCls = classnames({
        'fa fa-music': true
     });
     let slideCls = classnames({
         'slide-in' : true,
     });
     return(
       <div className={wrapperCls}>
        <div>
            {/*<div className="icon-wrap">
              <span className={iconCls} aria-hidden="true" />
            </div>*/}
             <div className={slideCls} id="music-player">
               <MusicPlayer autoplay = {false}/>
            </div>
        </div>
       </div>
     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mp3Dock)