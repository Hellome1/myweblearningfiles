export default {
  path: '/mine',
  component: () => import('@/views/Mine'),
  children: [
    {
      path: 'Center',
      component: () => import('@/views/Mine/center')
    },
    {
      path: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: 'Register',
      component: () => import('@/components/Register')
    },
    {
      path: 'FindPassword',
      component: () => import('@/components/FindPassword')
    },
    {
      path: '/mine',
      redirect: 'center'
    }
  ]
}