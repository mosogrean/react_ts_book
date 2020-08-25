import {
  ChatState, ChatActionTypes, ITEM_LOADING, GET_FRIEND_TABLE,
} from './types';

const initalState: ChatState = {
  isLoading: false,
  friendTable: [],
};

export default function chatReducer(state = initalState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case ITEM_LOADING:
      return { ...state, isLoading: true };
    case GET_FRIEND_TABLE:
      return { ...state, friendTable: action.payload, isLoading: false };
    default:
      return { ...state };
  }
}
