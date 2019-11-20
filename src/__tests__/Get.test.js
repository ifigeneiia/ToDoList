import * as types from '../constants/actionTypes' ;
import * as action from '../actions/itemActions';
import configureStore from 'redux-mock-store' //ES6 module

const middlewares = []
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
//const addTodo = () => ({ type: 'ADD_TODO' })

it('should dispatch action when gettingItems', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.gettingItems());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.GETTING_ITEMS }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when getItems', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.getItems());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.GET_ITEMS }
  expect(actions).toEqual([expectedPayload])
})
it('should dispatch action when have gettingItemsError', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(action.gettingItemsError());

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: types.GETTING_ITEMS_ERROR }
  expect(actions).toEqual([expectedPayload])
})
