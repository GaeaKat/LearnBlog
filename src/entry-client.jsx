import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes.jsx'

const router = createBrowserRouter(routes)
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
)