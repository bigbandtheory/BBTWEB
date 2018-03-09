import React,{Component} from 'react';
import BaseSeat from './BaseSeat';
import className from 'classnames';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return {
        selectSeat=()=>{
            this.props.seat.selected = !this.props.seat.selected
            dispatch(selectSeat());
        }
    };
}

export default class Seat extends BaseSeat{


   get Seat(){
        let seatCls = className({
            'seat' : true,
            'seat-grey': this.props.seatClass === 'E',
            'seat-gold': this.props.seatClass === 'G',
            'selected': this.props.selected === true
        });
        return(
            <div className="seat-container" onClick={this.props.selectSeat.bind(this)}>
                <div className={seatCls} >
                    <span className="seat-price">{this.props.price}</span>
                </div>
            </div>
        );
   }

}

export default connect(null, mapDispatchToProps)(Seat);

