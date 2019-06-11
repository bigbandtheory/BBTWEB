import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component{

  static propTypes = {
    headers : PropTypes.array.isRequired,
  }


  render(){
    return(
       <div className="table-responsive table-light mBottom100">
            <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    {
                      this.props.headers.map((header, index)=>{
                        return (<th key = {index}className={header.className}> <span className={header.iconClass ? header.iconClass : null}></span>{header.name}</th>);
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                  {this.props.children}
                </tbody>
            </table>
        </div>
    );
  }
}