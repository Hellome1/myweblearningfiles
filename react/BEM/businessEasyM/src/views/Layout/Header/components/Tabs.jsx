import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deleteTabs } from '@/redux/action/tabs';
import { useNavigate, useLocation } from 'react-router-dom';

function Tabs(props) {
  const { tabs } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const {pathname} = location;

  const deleteTab = (tabObj) => {
    props.deleteTabs(tabObj);
    const prevTab = tabs.find((itm, ind) => tabs[ind + 1] && tabs[ind + 1].desc === tabObj.desc);
    const route = prevTab && prevTab.route || '/home';
    navigate(route)
  }

  return (
    <div id="header-tabs">
      <span className="routine-tabs">
        <span className='header-tabs-itm' key={'routine1'}>首页 <img src="/icons/svg/dot.svg" alt="" className='routine-dot' /></span>
      </span>
      <span className='dynamic-tabs'>
        {
          tabs.map(itm => (
            <span className={pathname === '/' + itm.route ? 'header-tabs-itm active' : 'header-tabs-itm'} onClick={() => {navigate(itm.route)}} key={itm.desc}>
              {itm.desc} 
              <CloseOutlined onClick={(event) => {event.stopPropagation();deleteTab(itm);}} className='tabs-close-btn' />
            </span>
          ))
        }
      </span>
    </div>
  )
}

export default connect(
  state => ({tabs: state.tabs}),
  { deleteTabs }
)(Tabs);
