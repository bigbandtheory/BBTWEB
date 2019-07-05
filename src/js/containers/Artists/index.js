import React,{Component} from 'react';
import ArtistCard from '../../components/Artist/ArtistCard';
import Parrallax from '../../components/Parrallax';
import {connect} from 'react-redux';
import ArtistList from './ArtistList';
import {listAllArtist,listFeaturedArtist} from '../../redux/Actions';
import ProjectCarousal from '../../components/Carausal/ProjectCarousal';
require('./index.css');

const mapStateToProps = (state) =>{
    return {
        featuredList : state.artist.featuredList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listFeaturedArtist : () =>{
            dispatch(listFeaturedArtist());
        }
    };
};

class Artists extends Component {

    componentWillMount(){
        this.props.listFeaturedArtist();
    }

    render(){
        return(
           <div>
             <div className="row pageHeader pattern-darkGrey">
                <div className="container c-white">
                    <h1 className="pageTitle f-raleway fw-900" >
                        ARTIST GALLERY
                    </h1>
                    <h5 className="pageSubTitle f-openSans fw-400">
                        Check Out These Artist!
                    </h5>
                </div>
                <Parrallax className="background-dark-gradient" backgroundImage='assets/images/background/artist-collage.jpg'>
                </Parrallax>
                {/*<ProjectCarousal slides={this.props.featuredList}  />*/}
             </div>
             <div>
                <div className="row services p0 bg-white">

                    <div className="container mTop50 mBottom50">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-darkGrey">
                            <h6 className="f-robotoSlab fw-900">
                                <span className="dropCap-3 c-white">01</span>DREAM
                            </h6>
                            <p>Cras arcu enim, pulvinar sit amet sodales eu, egestas at dui. Curabitur placerat, enim a pretium elementum, dolor eros rhoncus lacus, varius dictum velit turpis vel nisi. Nullam felis metus, elementum.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-darkGrey">
                            <h6 className="f-robotoSlab fw-900">
                                <span className="dropCap-3 c-white">02</span>WORK
                            </h6>
                            <p>Cras arcu enim, pulvinar sit amet sodales eu, egestas at dui. Curabitur placerat, enim a pretium elementum, dolor eros rhoncus lacus, varius dictum velit turpis vel nisi. Nullam felis metus, elementum.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-darkGrey">
                            <h6 className="f-robotoSlab fw-900">
                                <span className="dropCap-3 c-white">03</span>GOOD JOB!
                            </h6>
                            <p>Cras arcu enim, pulvinar sit amet sodales eu, egestas at dui. Curabitur placerat, enim a pretium elementum, dolor eros rhoncus lacus, varius dictum velit turpis vel nisi. Nullam felis metus, elementum.</p>
                        </div>
                    </div>
                    <ArtistList />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);