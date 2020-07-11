import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card>Card</Card>);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });
});
