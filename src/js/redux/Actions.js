import * as types from './actionTypes';
import store from './store';
import * as api from '../network';

export function listArtist(filter = {page : 1 , size : 10}){

    return function(dispatch) {
       return api.getAllArtists().then((response) => {
          dispatch((response)=>{
            return {
              type: types.ARTIST_LIST,
              data: response
            };
          });
       });

    };
}

export function featuredTracks(){

   return function(dispatch){
     return api.getFeaturedTracks().then((response) => {
        dispatch(dispatchTrackList(response));
     });
   }
}


export function featuredArtist(){
}

export function toggleMenu(open = false) {

  return {
    type: types.MENU_TOGGLED,
    data: {open},
  };

}

export function toggleSearchBar(open = false){

  return {
    type: types.OPEN_SEARCH_BOX,
    data: {open}
  }
}

export function featuredClient(){

   return function(dispatch, getState){
     let newState = Object.assign({}, getState());
     return api.getFeatureClients().then((response) =>{
       dispatch(hydrateClientFavList(response));
     });
   };
}

export function artistCarousal(){
    return function(dispatch) {
      return api.getArtistCarousal().then((response) => {
         dispatch(dispatchArtistCarousal(response));
      });
    };
}

export function getArtist(id){
   return function(dispatch){
     return api.getArtistById(id).then((response) =>{
       console.log(response);
     });
   };
}

export function getAllEvents(){

   return function(dispatch){
     return api.getEvents().then((response)=>{
        dispatch(dispatchEvents(response));
     });
   }
}

export function toggleMusicPlayer(open = false){
    return {
      type : types.MUSIC_PLAYER_TOGGLE,
      data : open
    };
}

function hydrateClientFavList(state){

   return {
     type : types.CLIENT_FAV_LIST,
     data : state
   };
}



function dispatchEvents(response){

  return {
     type : types.ALL_EVENTS,
     data : response
  };
}

function dispatchArtistCarousal(response){

  return {
    type : types.ARTIST_CAROUSAL,
    data : response
  };
}

function dispatchFeaturedTracks(response){

  return {
    type : types.FEATURED_TRACK,
    data : response
  };
}

function dispatchTrackList(response){
  return {
    type : types.TRACK_LIST,
    data : response
   };
}


