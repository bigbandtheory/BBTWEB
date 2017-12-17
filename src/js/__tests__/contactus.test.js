import React from 'react';
import ContactUs from '../components/ContactUs';
import Form from '../components/ContactUs/Form';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import Button from '../components/Fields/Button';


describe('Component Contact Us ',()=>{
  let component = renderer.create(<ContactUs  />);
  test('It should mount', ()=>{
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    //tree.props.onMouseEnter();
  });

  test('It should simulate submit action ', ()=>{
     let contactUs = shallow(<ContactUs />);
     sinon.spy(ContactUs.prototype, 'submitMessage');
     let form = contactUs.find(Form)
     expect(form.length).toBe(1);
     let button = form.dive().find(Button);
     expect(button.length).toBe(1);
     button.setState({disabled : true});
     expect(button).toBeDefined();
     expect(button.length).toBe(1);
     expect(button.props().label).toBe('SEND MESSAGE');

     button.find('a.gradientButton').get(0).simulate('click');
     expect(ContactUs.prototype.submitMessage).toHaveProperty('callCount', 1);
  });

  describe('Contact Us Form',()=>{

    let onChangeHandler = sinon.spy();
    let form = mount(<Form onChangeHandler= {onChangeHandler}></Form>);

    test('It should mount with 3 input type ',()=>{
      expect(Form.prototype.render.calledOnce).toBe.true;
      let input = form.find('input');
      expect(input).toBeDefined();
      expect(input.length).toBe(3);
    });

    test('It simulates on Change functionality',() =>{
      let input = form.find('input[name="name"]');
      expect(input).toBeDefined();
      expect(input.length).toBe(1);
      input.simulate('change');
      expect(onChangeHandler.calledOnce).toBe.true;
    });


    test('On change of element state value should be changed', ()=>{
       let input = form.find('input[name="name"]');
       expect(input).toBeDefined();
       expect(input.length).toBe(1);

    });

  });

});




