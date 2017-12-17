import React,{Component,PropTypes} from 'react';


export default class FastSlideShow extends Component{

  constructor(props){
    super(props);
  }

  static propTypes = {
    slides : PropTypes.array.isRequired,
  }

  render(){
    return(
      <div className="row bg-darkGrey p0 fastSlider logo-container" style={{position: 'relative', overflow: 'hidden'}}>
        <div className="hs-wrapper">
          <div className="pattern-red" style={{ opacity: 0.5, position:'absolute', width:'100%', height: '100%',zIndex:1000 }}/>
          {
            this.props.slides.map((slide, key)=>{
              return <div className="hs-img" key={key} style={{ backgroundImage: `url(${slide.url})`, backgroundPosition: 'enter', backgroundSize: 'cover'}}></div>
            })
          }{
            this.props.slides.map((slide, key)=>{
              return <div className="hs-img" key={key+4}  style={{ backgroundImage: `url(${slide.url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
            })
          }

          {this.props.children}
        </div>
      </div>
    );
  }

}