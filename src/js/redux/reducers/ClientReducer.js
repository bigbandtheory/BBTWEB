import * as actionTypes from '../actionTypes';

export default function ClientReducer(state = {}, action){

   switch(action.type){

     case actionTypes.CLIENT_FAV_LIST:
       return {
         ...state,
         favList : action.data
       }
     default:
       return state;
   }
}