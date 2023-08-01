import { useRoutes } from 'react-router-dom'

import getRoutes, { getStationRoutes } from '@/route';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function App({ extraRoutes }) {
  const [routes, setRoutes] = useState(getRoutes(extraRoutes));

  useEffect(() => {
    setRoutes(getRoutes(extraRoutes))
  }, [extraRoutes])
  
  console.log('routes', routes);
  const elements = useRoutes(routes);

  return (
    <>
      {elements}
    </>
  )
}

export default connect(
  state => ({extraRoutes: state.extraRoutes}),
  {}
)(App)
