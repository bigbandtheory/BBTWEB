import React,{Component, PropTypes} from 'react';
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
        'menu-button music-icon' : true
     });
     let iconCls = classnames({
        'fa fa-music': this.props.open === false,
        'fa fa-close': this.props.open === true
     });
     let slideCls = classnames({
       'slide-in' : this.props.open === true,
       'slide-out' : this.props.open === false
     });
     return(
       <div className={wrapperCls}>
        <div>
            <div className="icon-wrap" onClick={this.props.onClick.bind(this , this.props.open)}>
              <span className={iconCls} aria-hidden="true" />
            </div>
             <div className={slideCls} id="music-player">
               <MusicPlayer/>
            </div>
        </div>
       </div>
     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mp3Dock)