import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import Card from '../Card';

const mapStateToProps = (state) =>{
  return {
    clients : state.client.favList
  }
};

class Client extends Component{

  static propTypes = {
    clients : PropTypes.array.isRequired
  }

  render(){
    return(
      <div className="row one-gutter clients pattern-white logo-container" style={{position: 'relative', overflow: 'hidden'}}>
        <div className="container mBottom70">
          <h2 className="sectionTitle f-damion c-darkGrey">
            Clients
          </h2>
          {
            this.props.clients.map((client, index)=>{
              return <Card item ={client} key={index} ></Card>
            })
          }
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(Client);