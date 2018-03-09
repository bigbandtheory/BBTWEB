import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class ArtistCard extends Component {

    render(){
        let uri = `/artists/${this.props.id}`;
        return(
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p0 photoService">
                <div className="pageImageColor pattern-yellow">
                    <div className="serviceContent">
                        <h4>{this.props.name}</h4>
                        <Link to={uri} className="textButtonWhite">
                            <h5>Preview Artist</h5>
                        </Link>
                    </div>
                    <img src="assets/images/general/04.jpg" alt="About" />
                </div>
            </div>
        );
    }
}