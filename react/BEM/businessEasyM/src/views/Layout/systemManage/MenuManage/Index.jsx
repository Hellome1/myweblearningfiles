import { Space, Table, Button } from 'antd';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addRoutes } from '@/redux/action/routes';
import Modal from './components/modal';

const columns = [
  {
    title: '菜单名称',
    dataIndex: 'menuDesc',
    key: 'menuDesc',
  },
  {
    title: '菜单类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '菜单路由',
    dataIndex: 'route',
    key: 'route'
  },
  {
    title: '菜单组件',
    dataIndex: 'component',
    key: 'component'
  },
  {
    title: '菜单图标',
    dataIndex: 'icon',
    key: 'icon',
    render: (_, row) => {
      return (
        <img className='icon-translate' src={'/icons/svg/' + row.icon} alt="" />
      )
    }
  },
  {
    title: '菜单顺序',
    dataIndex: 'menuOrder',
    key: 'menuOrder',
  },
  {
    title: '操作',
    key: 'action',
    render: _ => {
      const handleClick = () => {}
      return (
        <Space size='middle'>
          <a onClick={handleClick}>编辑</a>
          <a>删除</a>
        </Space>
      )
    }
  }
];

const hanldeData = (data) => {
  return data.map(itm => {
    itm.key = itm.id;
    if (itm.children && itm.children.length) itm.children = hanldeData(itm.children);
    else delete itm.children;
    return itm;
  })
}

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('模态框内容');
  const {menus} = props;
  let data = JSON.parse(JSON.stringify(menus)).filter(itm => itm.route != 'home');
  data = hanldeData(data);

  const initModal = () => {
    setModalText('模态框内容')
  }

  const showModal = () => {
    initModal();
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalText('2s后即将关闭！')
    setConfirmLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setModalOpen(false);
  };

  return (
    <>
      <Button type="primary" style={{textAlign: 'left', marginBottom: '10px'}} onClick={showModal}>
        新增
      </Button>
      
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
          checkStrictly: false
        }}
        // loading={loading}
        dataSource={data}
        expandable={
          {defaultExpandAllRows: true}
        }
      />

      <Modal
        open={modalOpen}
        confirmLoading={confirmLoading}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalText={modalText}
      />
    </>
  );
};

export default connect(
  state => ({menus: state.extraRoutes}),
  {addRoutes}
)(App);