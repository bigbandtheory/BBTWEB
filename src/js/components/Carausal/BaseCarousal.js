import React,{Component} from 'react';
import PropTypes from 'prop-types'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class BaseCarousal extends Component{

    static defaultSettings = {
       dots: true,
       infinite: true,
       speed: 500,
       arrows : false,
       slidesToShow: 1,
       slidesToScroll: 1,
       adaptiveHeight: false
    }

    constructor(props){
      super(props);
      const settings = {
        ...this.constructor.defaultSettings,
        ...this.props.settings
      }
      this.state = {
        settings: settings
      }
    }

    static propTypes = {
      settings: PropTypes.object.isRequired
    }

    get slides(){
       return <div>Please configure carousel properly</div>;
    }

    render(){
      return(
        <div>
          <Slider ref={(x)=>this.slider=x} {...this.state.settings}>
            {this.slides}
          </Slider>
        </div>
      );
    }
}


