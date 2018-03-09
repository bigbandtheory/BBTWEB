import * as actionTypes from '../actionTypes';

export default function artistReducer(state = {}, action){


    switch (action.type){

      case actionTypes.ARTIST_LIST:
        return {
          ...state,
          list : action.data
        }

      case actionTypes.ARTIST_CAROUSAL:
         return{
           ...state,
           carousal : action.data
         }
      case actionTypes.FEATURED_TRACK:
         return{
           ...state,
           featuredTracks: action.data
         }
      case actionTypes.FEATURED_ARTIST_LIST:
         return {
            ...state,
            featuredList: action.data
         }
      default:
        return state;
    }
}