// @flow

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './UserList';

configure({ adapter: new Adapter() });

describe('<UserList />', () => {
  const props = {};

  test('Renders without crashing', () => {
    const wrapper = shallow(<UserList {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
