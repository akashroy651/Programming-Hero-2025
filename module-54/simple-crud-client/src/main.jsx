import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Users from './components/Users.jsx';
import UserDetail from './components/UserDetail.jsx';
import UpdateUser from './components/UpdateUser.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: 'users/:id',
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
    Component: UserDetail
  },
  {
    path: 'update/:id',
    Component: UpdateUser
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />,
  </StrictMode>,
)
