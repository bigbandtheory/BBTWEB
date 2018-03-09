import React,{Component} from 'react';

export default class BaseSeat extends Component{

    constructor(props){
        super(props);
    }

    get seat(){
        return <span> Implement Seat by extending base seat class.</span>;
    }

    render(){
        <div className="seat-wrapper">{seat}</div>
    }

}