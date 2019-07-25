import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { eventReducer } from './reducer/events';


const store = createStore(eventReducer, applyMiddleware(thunk))

export default store
