// @flow

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostList from './PostList';

configure({ adapter: new Adapter() });

describe('<PostList />', () => {
  const props = {
    history: {},
    location: {},
    match: {},
  };

  test('Renders without crashing', () => {
    const wrapper = shallow(<PostList {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
