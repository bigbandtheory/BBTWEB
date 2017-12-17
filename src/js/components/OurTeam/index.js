import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);

const mapStateToProps = (state) =>{
    return {
      teams : state.app.teams
    };
};

class OurTeam extends Component{

  static propTypes={
    teams: PropTypes.array.isRequired
  }

  render(){
    return(
      <div className="row team bg-darkGrey pattern-darkGrey logo-container" id="team">
        <div className="container pBottom80">
          <h2 className="sectionTitle f-damion c-white">
                The B Team
          </h2>
          <section id="grid" className="grid clearfix">
          {
            this.props.teams.map((team , index)=>{
              return <TeamItem team={team} key={index}/>
            })
          }
          </section>
        </div>
      </div>
    );
  }

}

class TeamItem extends Component{

  static propTypes = {
    team : PropTypes.object.isRequired,
  }

  init() {
    var speed = 330,
        easing = mina.backout;

    [].slice.call ( document.querySelectorAll( '#grid > div' ) ).forEach( function( el ) {
        var s = Snap( el.querySelector( 'svg' ) ),
            path = s.select( 'path' ),
            pathConfig = {
                from : path.attr( 'd' ),
                to : el.getAttribute( 'data-path-hover' )
            };

        el.addEventListener( 'mouseenter', function() {
            path.animate( { 'path' : pathConfig.to }, speed, easing );
        });

        el.addEventListener( 'mouseleave', function() {
            path.animate( { 'path' : pathConfig.from }, speed, easing );
        } );
    } );
  }

  animateOnMouseEnter(){
    this.animate(this.controlNode , true);
  }

  animateOnMouseLeave(){
    this.animate(this.controlNode , false);
  }

  animate(el, to = true){
    let speed = 330, easing = mina.backout;
    let s = Snap( el.querySelector( 'svg' ) ),
    path = s.select( 'path' ),
    pathConfig = {
        from : "M180,160C180,160,0,218,0,218C0,218,0,0,0,0C0,0,180,0,180,0C180,0,180,160,180,160",
        to : "m 180,34.57627 -180,0 L 0,0 180,0 z"
    };

    to === true ? path.animate( { 'path' : pathConfig.to }, speed, easing ) : path.animate( { 'path' : pathConfig.from }, speed, easing );
  }

  render(){
    let team = this.props.team;
    return(
        <div ref={(x) => this.controlNode = x } onMouseEnter={this.animateOnMouseEnter.bind(this)} onMouseLeave={this.animateOnMouseLeave.bind(this)}>
            <figure>
                <img src={team.image} />
                <svg viewBox="0 0 180 320" preserveAspectRatio="none">
                  <path d="M180,160C180,160,0,218,0,218C0,218,0,0,0,0C0,0,180,0,180,0C180,0,180,160,180,160"></path>
                  <desc></desc><defs></defs>
                </svg>
                <figcaption>
                    <h4 className="f-damion">{team.name}</h4>
                    <p>{team.description}</p>
                </figcaption>
                <button className="f-nothingYouCouldDo">{team.designation}</button>
            </figure>
        </div>
    );
  }
}

export default connect(mapStateToProps)(OurTeam);