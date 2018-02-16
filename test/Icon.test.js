import React from 'react';
import { shallow, mount } from 'enzyme';

import Icon from '../src/Icon/Icon';

describe('<Icon/>', () => {
  it('should render large <Icon/>', () => {
    const wrapper = shallow(<Icon icon="check" lg />);
    expect(wrapper.find('svg').prop('width')).toBe(32);
    expect(wrapper.find('svg').prop('height')).toBe(32);
  });

  it('should render medium <Icon/>', () => {
    const wrapper = shallow(<Icon icon="check" md />);
    expect(wrapper.find('svg').prop('width')).toBe(24);
    expect(wrapper.find('svg').prop('height')).toBe(24);
  });


  it('should render small <Icon/>', () => {
    const wrapper = shallow(<Icon icon="check" />);
    expect(wrapper.find('svg').prop('width')).toBe(16);
    expect(wrapper.find('svg').prop('height')).toBe(16);
  });

  it('should render small <Icon/> without props', () => {
    const wrapper = shallow(<Icon icon="check" />);
    expect(wrapper.find('svg').prop('width')).toBe(16);
    expect(wrapper.find('svg').prop('height')).toBe(16);
  });
});
