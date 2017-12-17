import React from 'react';
import AboutUs from '../components/AboutUs';
import { mount,shallow } from 'enzyme';
import renderer from 'react-test-renderer';

const wrapper = mount(<AboutUs />);

test('component header should be ORIGINAL IS GOOD', ()=>{

  let header = wrapper.find('.f-raleway');
  expect(header.text()).toBe('ORIGINAL IS GOOD');
});

test('component image should have an image src ', ()=>{

  let img = wrapper.find('.pageImage').find('img');
  expect(img.src).toBe('https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/14712612_563101563896869_8999902237445221458_o.jpg?oh=b9070ddec339ecae14cafba591ab85eb&oe=5A9EE2CA');

});

