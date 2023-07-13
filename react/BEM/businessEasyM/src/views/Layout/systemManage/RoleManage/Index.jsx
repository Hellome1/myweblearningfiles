import { req } from '@/api';
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
const columns = [
  {
    title: '角色',
    dataIndex: 'roleDesc',
    key: 'roleDesc',
  },
  {
    title: '操作',
    key: 'action',
    render: _ => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const handleData = (data) => {
  return data.map(itm => {
    itm.key = itm.id;
    return itm;
  })
}
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    req({
      url: 'roles.json',
      method: 'get'
    }).then(res => {
      setData(handleData(res.data));
    })
  }, [])

  return <Table columns={columns} dataSource={data} />;
}
export default App;