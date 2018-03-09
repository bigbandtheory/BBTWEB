import React,{Component} from 'react';


export default class NextArrow extends Component{

    render(){
        return(
           <span>
                <a onClick={this.props.onClick.bind(this)} className="next-item" href="#">
                    <span>NEXT</span>
                </a>
            </span>
        );
    }
}