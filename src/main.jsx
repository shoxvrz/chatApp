import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h2>...Loading</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
