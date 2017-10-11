import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import channelsReducer from './channels'
import clientReducer from './client'
import currentUserReducer from './currentUser'
import flashMessagesReducer from './flashMessages'
import portableReducer from './portable'
import roomsReducer from './rooms'
import roomsMetaReducer from './roomsMeta'
import roomMessagesReducer from './roomMessages'
import roomUsersReducer from './roomUsers'
import socketReducer from './socket'
import starMessagesReducer from './starMessages'

export default combineReducers({
  client: clientReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  flashMessages: flashMessagesReducer,
  form: reduxFormReducer,
  portable: portableReducer,
  rooms: roomsReducer,
  roomsMeta: roomsMetaReducer,
  roomMessages: roomMessagesReducer,
  roomUsers: roomUsersReducer,
  routing: routerReducer,
  socket: socketReducer,
  starMessages: starMessagesReducer
})
