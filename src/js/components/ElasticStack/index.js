import React,{Component,PropTypes} from 'react';


export default class ElasticStack extends Component{

  component(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <ul ref = {(x) => this.container = x} className="stack__images">
         {this.props.children}
      </ul>
    );
  }
}