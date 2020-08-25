import { Dispatch } from 'react';
import {
  ChatActionTypes, ITEM_LOADING, FriendTable, GET_FRIEND_TABLE,
} from './types';

export function setItemLoading(): ChatActionTypes {
  return {
    type: ITEM_LOADING,
  };
}

export const getFriendTable = () => (
  dispatch: Dispatch<ChatActionTypes>,
): void => {
  dispatch({ type: ITEM_LOADING });
  const friendTable: Array<FriendTable> = [{
    one_email: 'sanunfa.si@one.th',
    user_id: 'Uef604efa83ec5ebb8b545f9c789e0d2b',
    one_id: '24681933824',
    display_name: 'Mos-OneSpace',
    type: 'user',
  },{
    one_email: 'sanunfa.si@one.th',
    user_id: 'Uef604efa83ec5ebb8b545f9c789e0d2b',
    one_id: '24681933824',
    display_name: 'Mos-OneSpace',
    type: 'user',
  },{
    one_email: 'sanunfa.si@one.th',
    user_id: 'Uef604efa83ec5ebb8b545f9c789e0d2b',
    one_id: '24681933824',
    display_name: 'Mos-OneSpace',
    type: 'user',
  },{
    one_email: 'sanunfa.si@one.th',
    user_id: 'Uef604efa83ec5ebb8b545f9c789e0d2b',
    one_id: '24681933824',
    display_name: 'Mos-OneSpace',
    type: 'user',
  },{
    one_email: 'sanunfa.si@one.th',
    user_id: 'Uef604efa83ec5ebb8b545f9c789e0d2b',
    one_id: '24681933824',
    display_name: 'Mos-OneSpace',
    type: 'user',
  },];

  dispatch({ type: GET_FRIEND_TABLE, payload: friendTable });
};
