import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lab1 from './Lab1.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/lab1',
    element: <Lab1 />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
