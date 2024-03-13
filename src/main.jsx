import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lab1 from './Lab1.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const baseURL = '/vrlab';

const router = createBrowserRouter([
  {
    path: baseURL + '/',
    element: <App />,
  },
  {
    path: baseURL + '/lab1',
    element: <Lab1 />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
