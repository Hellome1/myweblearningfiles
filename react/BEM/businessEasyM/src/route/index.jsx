import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import NotFind from '@/views/NotFind'

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

export function getStationRoutes () {
  return [
    {
      path: '/login',
      element: <Suspense>{lazyLoad('Login')}</Suspense>
    },
    /* 不应该有注册页面，账号、权限由admin分发 */
    // {
    //   path: '/register',
    //   element: <Register />
    // },
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
}

export default function getRoutes(extraRoutes) {
  const stationRoutes = getStationRoutes();
  const newRoutes = stationRoutes.map(itm => {
    if (itm.name === 'layout') {
      const rawChildren = itm.children;
      
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