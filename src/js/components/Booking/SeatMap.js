import React,{Component} from 'react';
import './index.css';
import Seat from './Seat';
import {connect} from 'redux-connect';

const mapStateToProps = (state) => {
    return {
        seatMap: state.booking.seatMap
    }
};


class SeatMap extends Component {

    render(){
        return this.props.seatMap.map((seat)=>{
            return (
                <div className="seat-map-wrapper"> <Seat {...seat}/> </div>
            );
        });
    }
}

export default connect(mapStateToProps)(mapStateToProps);



