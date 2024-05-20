import { lazy } from 'react';
import {createBrowserRouter} from 'react-router-dom';

const Login = lazy(() => import('../pages/Login/Login'))
const Chat = lazy(() => import('../pages/Chat/Chat'))


export const router = createBrowserRouter([
   {
      path: '/',
      element: <Login/>
   },
   {
      path: '/chat',
      element: <Chat/>
   }
])