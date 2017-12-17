import React,{Component,PropTypes} from 'react';
import classNames from 'classnames';

export default class Button extends Component{

  static propTypes = {
    onClick : PropTypes.func.isRequired,
    label : PropTypes.string,
    wrapperClass : PropTypes.string,
    btnClass : PropTypes.string,
    url : PropTypes.string,
  }

  static defaultProps = {
    wrapperClass : 'col-lg-12 t-center',
    btnClass : '',
    label : 'SEND MESSAGE'
  }

  constructor(props){
    super(props);
    this.state = {
      disabled : false
    };
  }

  componentDidMount() {
      let forms = document.querySelectorAll('form');

      for (let form of forms) {

        if (form.contains(this.buttonEl)) {
          this.formEl = form;
          break;
        }
      }

      if (this.formEl) {
        this.toggleDisabled();
        this.formEl.addEventListener( 'click', this.toggleDisabled.bind(this));
        this.formEl.addEventListener('input', this.toggleDisabled.bind(this));
      }
    }

    toggleDisabled() {
      setTimeout(() => {
        this.setState({
          disabled: !this.formEl.checkValidity(),
        });
      }, 100);

    }


  render(){
    let btnCls = `${this.props.btnClass} gradientButton pink inverse mTop50`;
    let btnClass =  classNames({
      [btnCls] : true,
      'disable-link' : this.state.disabled
    });

    return(
      <div ref={(x) => this.buttonEl = x} className={this.props.wrapperClass} >
          <a href={this.props.url ? this.props.url : null} onClick ={this.props.onClick} className={btnClass}>{this.props.label}</a>
      </div>
    );
  }

}