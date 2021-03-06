import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import BaseSlider from './BaseSlider';
import classNames from 'classnames';

export default class ArtistSlider extends BaseSlider {

    static propTypes = {
        slides: PropTypes.array.isRequired,
        imageSlides: PropTypes.array.isRequired
    };

    static defaultProps = {
        settings: {}
    };

    constructor(props) {
        super(props);
    }

    get contentSlides() {
        return this.props.slides.map((slide, index) => {
            let contentClass = classNames({
                'ps-content': true,
                'ps-move': index === this.state.currentIndex
            });
            return (
                <div key={index} className={contentClass} style={{
                    top: this.state.currentIndex === index ? 0 : '100%',
                    zIndex: this.state.currentIndex === index ? 500 : 1
                }}>
                    <h3 className="f-raleway">{slide.title}</h3>
                    <p>{slide.description}</p>
                    {/*<a href="javascript();" className="textButtonWhite"><h5>Preview Artist</h5></a>*/}
                </div>
            );
        });
    }

    get imageSlides() {
        return this.props.slides.map(({video: { coverImage, url }}, index) => {
            let contentClass = classNames({
                'ps-move': index === this.state.currentIndex
            });
            return (
                <div key={index}
                     className={contentClass}
                     style={{
                         backgroundImage: `url(${coverImage})`,
                         top: this.state.currentIndex === index ? 0 : '-100%',
                         zIndex: this.state.currentIndex === index ? 500 : 1,
                         backgroundSize: 'cover'
                     }}>
                    {url && (
                        <i className="flaticon-play106 c-yellow"></i>
                    )}
                </div>
            );
        });
    }
}