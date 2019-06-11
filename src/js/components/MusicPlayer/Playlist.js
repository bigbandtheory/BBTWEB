import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Track from './Track';

const mapStateToProps = (state) =>{
  return {
    tracks : state.artist.featuredTracks
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {

  };
};

class Playlist extends Component{

  constructor(props){
    super(props);
  }

  static defaultProps = {
    tracks : []
  }

  static propTypes = {
    tracks : PropTypes.array.isRequired
  }


  render(){

    return(
       <div className="sm2-playlist">
         <div className="sm2-playlist-target">
           <ul>
           {
             this.props.tracks.map(( track , key )=>{
               return (
                  <li>
                    <Track key={key} {...track} />
                  </li>
               );
             })
           }
           </ul>
         </div>
       </div>

    );
  }



}


export default connect(mapStateToProps)(Playlist);
