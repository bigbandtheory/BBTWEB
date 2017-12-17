import * as types from '../actionTypes';


export default function MusicPlayer(state={} , action){


   switch(action.type){

     case types.TRACK_LIST:
        return {
          ...state,
          songs : action.data
        }
     case types.ADD_SONG :
       var songs = state.songs;
       return{
        ...state,
        songs : songs.concat(action.data)
       }

     case types.REMOVE_SONG:
        var songs = state.songs.map((song)=>{
          return song.id === action.data.id
        });
        return {
          ...state,
          ...songs
        }

      case types.MUSIC_PLAYER_TOGGLE:
         return {
           ...state,
           open : action.data
         }
     default:
       return state;
   }

}
