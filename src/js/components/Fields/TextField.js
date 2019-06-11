import React from 'react';
import PropTypes from 'prop-types';
import BaseField from './BaseField';

export default class TextField extends BaseField{

  constructor(props){
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  static propTypes =Object.assign({}, BaseField.propTypes, {
    type: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    elementId: PropTypes.string,
    tabIndex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  });

  static defaultProps = {
    type: 'text',
    defaultValue: '',
    placeholder: '',
    maxLength : 25000
  }

  get el(){
    return (
      <input type={this.props.type}
            id={this.props.id}
            name={this.props.name}
            ref={(x) => this.controlNode = x}
            pattern={this.props.pattern}
            required={this.props.required}
            onBlur={this.onBlur}
            onKeyUp={this.onKeyUp}
            onFocus={this.onFocus}
            maxLength={this.props.maxLength}
            tabIndex={this.props.tabIndex}
            placeholder={this.props.placeholder}
            onChange = {this.props.onChangeHandler}
            className="input__field input__field--kozakura" />
    );
  }

}