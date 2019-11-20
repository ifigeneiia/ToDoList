import * as types from '../constants/actionTypes' ;
import * as action from '../actions/itemActions';
import configureStore from 'redux-mock-store' //ES6 module

const middlewares = []
const mockStore = configureStore(middlewares)


it('should dispatch action when removingItem', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.removingItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.REMOVING_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when removeItem', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.removeItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.REMOVE_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when have removingItemError', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.removingItemError());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.REMOVING_ITEM_ERROR }
  expect(actions).toEqual([expectedPayload])
})
