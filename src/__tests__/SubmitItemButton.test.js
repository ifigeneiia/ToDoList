import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import SubmitButton from '../components/UI/SubmitButton'

const mockStore = configureStore([]);

describe('My Connected React-Redux Component-Submit-Item', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
      editMode: true
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <SubmitButton />
      </Provider>
    );
  });
  it('should dispatch an action on button-submit-item click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
  });
});