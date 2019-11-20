import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import AddButton from '../components/UI/AddButton';

const mockStore = configureStore([]);


describe('My Connected React-Redux Component-Add-Item', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <AddButton />
      </Provider>
    );
  });
  it('should dispatch an action on button-add-item click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

  
  });
});