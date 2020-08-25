import { combineReducers } from 'redux';
import chatReducer from './store/chat/reducers';

const rootReducer = combineReducers({
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
