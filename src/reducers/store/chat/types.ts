export interface FriendTable {
  one_email: string;
  user_id: string;
  one_id: string;
  display_name: string;
  type: string;
}

export interface ChatState {
  isLoading?: boolean;
  friendTable: Array<FriendTable>;
}

export const ITEM_LOADING = 'ITEM_LOADING';
export const GET_FRIEND_TABLE = 'GET_FRIEND_TABLE';

interface ItemLoading {
  type: typeof ITEM_LOADING;
}

interface GetFriendTable {
  type: typeof GET_FRIEND_TABLE;
  payload: Array<FriendTable>;
}

export type ChatActionTypes = ItemLoading | GetFriendTable;
