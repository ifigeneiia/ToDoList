import * as types from '../constants/actionTypes' ;
import * as action from '../actions/itemActions';
import configureStore from 'redux-mock-store' //ES6 module

const middlewares = []
const mockStore = configureStore(middlewares)

it('should dispatch action when completingItem', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.completingItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.COMPLETING_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when completedItem', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.completedItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.COMPLETED_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when have completingItemError', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.completingItemError());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.COMPLETING_ITEM_ERROR }
  expect(actions).toEqual([expectedPayload])
})
