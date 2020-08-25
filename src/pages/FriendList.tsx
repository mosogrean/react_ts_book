import React, {useEffect} from 'react';
import { Row, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { getFriendTable } from '../reducers/store/chat/actions';

interface IDataSource {
  one_email: string;
  user_id: string;
  one_id: string;
  display_name: string;
  type: string;
}

interface IColumn {
  title: string;
  dataIndex: string;
  key: string;
  render?: () => {};
}

const columns: Array<IColumn> = [
  {
    title: 'Email',
    dataIndex: 'one_email',
    key: 'one_email',
  },
  {
    title: 'ID',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: 'OneID',
    dataIndex: 'one_id',
    key: 'one_id',
  },
  {
    title: 'Name',
    dataIndex: 'display_name',
    key: 'display_name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },

];

const FriendList = (): JSX.Element => {
  const { chat } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriendTable());
    console.log('1', chat);
  }, [])
  return (
    <div>
      <h1>Friend Form Bot Chat</h1>
      <Row justify="center">
        <Table columns={columns} dataSource={chat.friendTable} loading={chat.isLoading} />
      </Row>
    </div>
  );
};

export default FriendList;
