import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { postListReducer } from './reducers/postReducers'

const initialState = {}
const reducer = combineReducers({
  postList: postListReducer,
})

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
)

export default store