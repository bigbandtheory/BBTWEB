import React,{ Component, PropTypes} from 'react';
import Parrallax from '../Parrallax';
import {connect} from 'react-redux';
import Table from '../Table';

const headers = [{name : 'Name' , className : '', iconClass : ''},{name : 'Venue/Location' , className : '', iconClass : ''},{name : 'Date' , className : '', iconClass : ''},{name : 'Tickets' , className : 'text-right', iconClass : 'glyphicon glyphicon-tag'},];

const mapStateToProps = (state) =>{
  return {
    events : state.app.events
  };
}

class Events extends Component {

  static propTypes ={
    events : PropTypes.array.isRequired
  }

  get rows(){
    return(
      this.props.events.map((event , index)=>{
        return (
          <tr key={index}>
            <td>{index + 1 }</td>
            <td>{event.name}</td>
            <td>{event.venue}/{event.location}</td>
            <td>{event.date}</td>
            <td className="text-right">
              <a href="#" className="eventLink">
                <span className="eventPrice">
                  { event.price <= 0 ? 'free' : event.price }
                </span>
              </a>
            </td>
          </tr>
        );
      })
    );
  }

  render(){
    return(
    <div className="row events pattern-white logo-container" id="events" style={{position: 'relative', overflow: 'hidden'}}>
       <Parrallax backgroundImage= "assets/images/background/01.jpg" >
          <div className="container">
            <h2 className="sectionTitle f-damion c-white mTop100">
                Events
            </h2>
            <div className="row t-center mBottom40">
              <h5 className="f-raleway c-yellow fw-700">Upcoming events and booking informations</h5></div>
            <div className="table-responsive table-light mBottom100">
              <Table headers={headers} >
                {this.rows}
              </Table>
            </div>
          </div>
      </Parrallax>
    </div>
    );
  }
}

export default connect(mapStateToProps)(Events);