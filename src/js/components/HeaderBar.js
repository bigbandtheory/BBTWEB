import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {toggleMenu, toggleSearchBar} from '../redux/Actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick : function(open = false) {
      dispatch(toggleMenu(!open));
    },
    onSearchClick : function(open = false , event){
       event.preventDefault();
       dispatch(toggleSearchBar(!open));
    }
  };
};

const mapStateToProps = (state) => {
   return {
     open: state.app.open,
     loading: state.app.loading,
     openSearchBox: state.app.openSearchBox,
   };
};


class NavItem extends Component{
    constructor(props){
        super(props);
    }
}

class HeaderBar extends Component{

    constructor(props){
      super(props);
    }

    render(){

        return(
            <div className="row header">
                <div className="menu-wrap">
                    <div className="headerSearch"  id="search-open-button">
                        <a onClick={this.props.onSearchClick.bind(this, this.props.openSearchBox)}><i className="flaticon-magnifier13"></i></a>
                    </div>
                    <div className="search-box">
                        <input type="text"  placeholder="Search something..." />
                    </div>
                    <nav className="menu">
                        <ul className="menu-list" style={{display: 'block', maxHeight: 540}}>
                            <li><a href="#home"><span>HOME</span></a>
                                <a href="javascript:;" className="subMenuExpand"></a>
                                <ul className="subMenu">
                                    <li><a href="index.html">Homepage - 1</a></li>
                                </ul>
                            </li>
                            <li><a href="#about"><span>ABOUT</span></a>
                                <a href="javascript:;" className="subMenuExpand"></a>
                                <ul className="subMenu">
                                    <li><a href="about-us.html">About Us Page</a></li>
                                </ul>
                            </li>
                            <li><a href="#team"><span>TEAM</span></a></li>
                            <li><a href="#portfolio"><span>PORTFOLIO</span></a>
                                <a href="javascript:;" className="subMenuExpand"></a>
                                <ul className="subMenu">
                                    <li><a href="portfolio-detail.html">Portfolio Detail</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                </ul>
                            </li>
                            <li><a href="#blog"><span>BLOG</span></a>
                                <a href="javascript:;" className="subMenuExpand"></a>
                                <ul className="subMenu">
                                    <li><a href="blog.html">Blog List</a></li>
                                    <li><a href="blog-post-1.html">Blog Post - 1</a></li>
                                    <li><a href="blog-post-2.html">Blog Post - 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#events"><span>EVENTS</span></a></li>
                            <li><a href="javascript:;"><span>FEATURES</span></a>
                                <a href="javascript:;" className="subMenuExpand"></a>
                                <ul className="subMenu">
                                    <li><a href="javascript:;">Third Menu Items</a>
                                        <a href="javascript:;" className="subMenuExpand"></a>
                                        <ul className="subMenuSecond">
                                            <li><a href="javascript:;">Third Menu Item</a></li>
                                            <li><a href="javascript:;">Third Menu Item</a></li>
                                            <li><a href="javascript:;">Third Menu Item</a></li>
                                            <li><a href="javascript:;">Third Menu Item</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="icon-sets.html">Icon Sets</a></li>
                                    <li><a href="animations.html">Animations</a></li>
                                    <li><a href="typography.html">Typography</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact"><span>CONTACT</span></a>
                                <a href="javascript:;" className="subMenuExpand"></a>
                                <ul className="subMenuLeft">
                                    <li><a href="contact.html">Contact - 1</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="menu-button" id="open-button" onClick = {this.props.onMenuClick.bind(this, this.props.open)}>
                    <div className= "menuNav">
                        <button className={this.props.open === true ? "c-hamburger c-hamburger--htx is-active" : "c-hamburger c-hamburger--htx"}>
                            <span>toggle menu</span>
                         </button>
                    </div>
                </div>
            </div>

        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);