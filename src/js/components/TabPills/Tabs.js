import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

class TabContent extends Component {

    static defaultProps = {
        currentIndex: 1
    }

    render() {
        return (
            <div className="tab-content">
                {
                    this.props.tabContents.map((content, index) => {
                        let cls = classNames({
                            'row': true,
                            'tab-pane': true,
                            'fade active in': this.props.currentIndex === index
                        });
                        return (
                            <div key={index} role="tabpanel" className={cls}
                                 dangerouslySetInnerHTML={{__html: content}}>

                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1
        }
    }

    onTabClick(index) {
        this.setState({currentIndex: index});
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-justified nav-tabs-responsive" role="tablist">
                    {
                        this.props.menus.map((menu, index) => {
                            let cls = classNames({
                                'tab-prev': this.state.currentIndex - 1 === index,
                                'active': this.state.currentIndex === index,
                                'tab-next': this.state.currentIndex + 1 === index
                            });
                            return (
                                <li key={index} role="presentation" className={cls}>
                                    <a onClick={this.onTabClick.bind(this, index)} aria-controls={menu.name} role="tab"
                                       data-toggle="tab">
                                        <i className={menu.icon}></i>
                                        <span className="text">{menu.label}</span>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                <TabContent tabContents={this.props.contents} currentIndex={this.state.currentIndex}/>
            </div>
        );
    }

}

