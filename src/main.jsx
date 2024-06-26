import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lab1 from './Lab1.jsx'
import Lab2 from './Lab2.jsx'
import Lab3 from './Lab3.jsx'
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
  },
  {
    path: '/lab2',
    element: <Suspense fallback={<p>Loading</p>}><Lab2 /></Suspense>
  },{
    path: '/lab3',
    element: <Suspense fallback={<p>Loading</p>}><Lab3 /></Suspense>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
