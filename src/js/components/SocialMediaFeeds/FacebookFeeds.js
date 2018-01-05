import React,{Component,PropTypes} from 'react';
import initFB from '../../Utils/initFB';


const VIDEO_SIZE = 8;

export default class FaceBookPage extends Component{

  static defaultProps = {
    showMenu : false
  }

  constructor(props){
    super(props);
    this.state = {
      loading : true,
    }
  }

  componentDidMount(){
    initFB(()=>{
      FB.api("/249271338613228/videos",{
            access_token : '1394137447399587|Fw9org8VygKq5V006oAHwKql3i0'
          },
          (response) => {
            if(response && !response.error){
               this.setState({videos : response.data })
            }
            this.setState({loading : false});
          }
      );
    });
  }

  renderFBPage(){
    if(this.state.loading === false){
      return(
       <div className="fb-page" data-href="https://www.facebook.com/musictbbt/"
         data-tabs="timeline" data-width="585"
         data-height="500" data-small-header="true"
         data-adapt-container-width="true" data-hide-cover="true"
         data-show-facepile="true">
         <blockquote cite="https://www.facebook.com/musictbbt/"
            className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/musictbbt/">
            Big Band Theory</a>
          </blockquote>
       </div>
      );
    }
  }

  renderFBVideos(){
     this.state.videos.length = VIDEO_SIZE;
     return this.state.videos.map((video, key)=>{
       let videoUrl = `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmusictbbt%2Fvideos%2F${video.id}%2F&width=500&show_text=false&appId=${process.env.FB_APP_ID}&height=280`;
       return(
        <div className="gallery-item">
             <iframe
               key={key}
               src={videoUrl}
               width="180px" height="250px" style={{border:'none',overflow:'hidden'}} scrolling="no"
               frameBorder="0" allowTransparency="true" allowFullScreen="true">
             </iframe>
         </div>
       );
     });
  }

  renderLoading(){
    if(this.state.loading === true){
      return <span>Loading...</span>;
    }
  }

  render(){
    return(
      <div className="container" style = {{ width: '100%', paddingBottom: '50px'}}>
        <h2 className="sectionTitle f-damion c-white">OUR VIDEOS</h2>
         {this.renderLoading()}
         <div className="gallery-wrapper">{this.state.loading === false && this.renderFBVideos()}</div>
       </div>
    );
  }


}