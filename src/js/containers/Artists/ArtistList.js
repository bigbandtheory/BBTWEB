import React,{Component} from 'react';
import ArtistCard from '../../components/Artist/ArtistCard';
import {connect} from 'react-redux';
import {listAllArtist} from '../../redux/Actions';

const mapStateToProps = (state) =>{

    return {
        artists : state.artist.list
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        listAllArtist : () =>{
            dispatch(listAllArtist());
        }
    };
};


class ArtistList extends Component {

    componentWillMount(){
        this.props.listAllArtist();
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p0">
                <div className="row p40">
                    {
                        this.props.artists.map((artist, index)=>{
                            return <ArtistCard {...artist} key={index} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);