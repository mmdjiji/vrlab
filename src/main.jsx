import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lab1 from './Lab1.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Suspense fallback={<p>Loading</p>}><App /></Suspense>
  },
  {
    path: '/lab1',
    element: <Suspense fallback={<p>Loading</p>}><Lab1 /></Suspense>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
