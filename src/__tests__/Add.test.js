import * as types from '../constants/actionTypes' ;
import * as action from '../actions/itemActions';
import configureStore from 'redux-mock-store' //ES6 module

const middlewares = []
const mockStore = configureStore(middlewares)

it('should dispatch action when adding item', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.addingItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.ADDING_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when add item', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.addItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.ADD_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when have add item error', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.addingItemError());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.ADDING_ITEM_ERROR }
  expect(actions).toEqual([expectedPayload])
})
