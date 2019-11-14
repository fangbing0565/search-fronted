import BasicLayout from '@/layouts/BasicLayout'
import IndexLayout from '@/layouts/IndexLayout'
import Loading from '@/components/Loading'
import Loadable from 'react-loadable'

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ '@/routes/Login/'),
  loading: Loading
})
const PictureDetails = Loadable({
  loader: () => import(/* webpackChunkName: "PictureDetails" */ '@/routes/Index/PictureDetails/'),
  loading: Loading
})
const webWorker = Loadable({
  loader: () => import(/* webpackChunkName: "webWorker" */ '@/routes/Index/webWorker/'),
  loading: Loading
})
const PageNotFound = Loadable({
  loader: () => import(/* webpackChunkName: "PageNotFound" */ '@/components/PageNotFound/'),
  loading: Loading
})
const routes = [
  {
    component: BasicLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Login
      },
      {
        path: '/index',
        component: IndexLayout,
        routes: [
          {
            name: 'web Worker',
            path: '/index/webWorker/',
            component: webWorker
          }
        ]
      },
      {
        path: '*',
        component: PageNotFound
      }
    ]
  }
]

export default routes
