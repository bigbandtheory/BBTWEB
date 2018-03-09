import React,{Component} from 'react';


export default class PrevArrow extends Component{

    render(){
        return(
           <span>
                <a className="prev-item" href="#">
                    <span>PREV</span>
                </a>
            </span>
        );
    }
}