import * as types from '../constants/actionTypes' ;
import * as action from '../actions/itemActions';
import configureStore from 'redux-mock-store' //ES6 module

const middlewares = []
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
//const addTodo = () => ({ type: 'ADD_TODO' })

it('should dispatch action when editingItem', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.editingItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.EDITING_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when editItem', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.editItem());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.EDIT_ITEM }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when have editingItemError', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.editingItemError());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.EDITING_ITEM_ERROR }
  expect(actions).toEqual([expectedPayload])
})
