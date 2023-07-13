import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import store from '@/redux/store';

import Register from '@/views/Register'
import NotFind from '@/views/NotFind/middle'

import { getToken } from '@/utils/token';

import { flatChildrenHasComponent } from '@/utils/method';

const lazyLoad = (moduleName) => {
  const Module = lazy(() => import(/* @vite-ignore */ `../views/${moduleName}`));
  return <Module />
}

const A = ({ children }) => {
  const token = getToken();
  return token ? children : <Navigate to='/login' />
}

const stationRoutes = [
  {
    path: '/login',
    element: <Suspense>{lazyLoad('Login')}</Suspense>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/404',
    element: <NotFind />
  },
  {
    path: '',
    name: 'layout',
    element: <Suspense><A>{lazyLoad('Layout')}</A></Suspense>,
    children: [
      {
        path: 'home',
        element: <Suspense>{lazyLoad('Layout/Main')}</Suspense>
      },
      {
        path: '',
        element: <Navigate to='home' />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  }
];

export default function getRoutes() {
  const newRoutes = stationRoutes.map(itm => {
    if (itm.name === 'layout') {
      const rawChildren = itm.children;
      const {extraRoutes} = store.getState()
      const newFlatChildren = flatChildrenHasComponent(extraRoutes);
      const childrenRoutes = newFlatChildren.map(itm => ({
        path: itm.route,
        element: <Suspense>{lazyLoad(itm.component)}</Suspense>
      }));
      const newChildren = [...rawChildren, ...childrenRoutes];
      itm.children = newChildren;
      return itm;
    } else {
      return itm;
    }
  });
  return newRoutes;
};