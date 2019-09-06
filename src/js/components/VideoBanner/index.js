import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

export default class VideoBanner extends Component {


    static propTypes = {
        videoSources: PropTypes.array.isRequired,
        theme: PropTypes.string
    };

    static defaultProps = {
        theme: 'white'
    };

    constructor(props) {
        super(props);
    }
    render() {
        let cls = classNames({
            'row video logo-container': true,
            'pattern-white': this.props.theme === 'white',
            'pattern-black': this.props.theme === 'black',
        });
        const { title, className } = this.props;
        cls = cls + ` ${className}`;
        return (
            <div className={cls} style={{position: 'relative', overflow: 'hidden'}}>
                <h2 className="sectionTitle f-damion c-white">{title}</h2>
                <video className='video-banner' autoPlay loop>

                    {
                        this.props.videoSources.map((source, index) => {
                            return <source key={index} src={source.url} type={source.type}/>
                        })
                    }
                </video>
                {this.props.children}
            </div>
        );
    }

}
