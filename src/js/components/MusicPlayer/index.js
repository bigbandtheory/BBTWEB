import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../AudioPlayer';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Playlist from './Playlist';


const mapStateToProps = (state)=>{
  return{
    songs : state.musicPlayer.songs
  };
};



class MusicPlayer extends Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
        <div className="row">
         { this.props.songs.length > 0 && <AudioPlayer {...this.props} />}
        </div>
    );
  }
}

export default connect(mapStateToProps)(MusicPlayer);