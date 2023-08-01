import { Empty } from 'antd';
import { getToken } from '@/utils/token';
import './index.scss';
import { Navigate } from 'react-router-dom';
const App = () => {
  const TOKEN = getToken();
  return TOKEN ?
     <Empty className='notFind-404' image={Empty.PRESENTED_IMAGE_SIMPLE} description='404 NOT FIND' /> :
      <Navigate to='/login' />;
}
export default App;