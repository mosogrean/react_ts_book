import React from 'react';
import { Row, Table } from 'antd';

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
  const dataSources: Array<IDataSource> = [{
    one_email: 'sanunfa.si@one.th',
    user_id: 'Uef604efa83ec5ebb8b545f9c789e0d2b',
    one_id: '24681933824',
    display_name: 'Mos-OneSpace',
    type: 'user',
  }];
  return (
    <div>
      <h1>Friend Form Bot Chat</h1>
      <Row justify="center">
        <Table columns={columns} dataSource={dataSources} />
      </Row>
    </div>
  );
};

export default FriendList;
