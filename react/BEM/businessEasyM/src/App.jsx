import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import getRoutes from '@/route';

function App() {
  const routes = getRoutes();
  console.log('roeut', routes)
  const elements = useRoutes(routes);

  return (
    <>
      {elements}
    </>
  )
}

export default App
