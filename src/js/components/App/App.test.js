// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import store from '../../store';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const props = {
    dispatch: jest.fn(),
  };

  test('Renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><App {...props} /></Provider>);
    expect(wrapper).toHaveLength(1);
  });
});
