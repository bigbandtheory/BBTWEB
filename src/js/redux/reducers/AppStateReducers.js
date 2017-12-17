
import * as actionTypes from '../actionTypes';

export default function AppStateReducers(state = {}, action){

   switch(action.type){

     case actionTypes.VIEW_ARTIST:

       return {
         ...state,
         ...action.data
       };

     case actionTypes.STAR:

       return {
         ...state,
         ...action.data.star
       };
     case actionTypes.MENU_TOGGLED:

       return {
         ...state,
         open : action.data.open
       };
     case actionTypes.OPEN_SEARCH_BOX:
       return {
         ...state,
         openSearchBox : action.data.open
       }
     case actionTypes.ALL_EVENTS:
       return {
         ...state,
         events : action.data
       }
     default:
       return state;
   }

}