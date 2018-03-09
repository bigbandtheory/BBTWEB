import * as actionTypes from '../actionTypes';


export default function bookingReducers(state = {}, action){

    switch(action.Type){

        case actionTypes.BOOKING_SELECT_SEAT:
            let seatMap = state.seatMap.map((seat)=>{
                if(seat.id === state.seat.id){
                    seat.selected = state.seat.selected;
                }
                return seat;
            });
            return {...state, seatMap};
        default:
           return state;
    }

}