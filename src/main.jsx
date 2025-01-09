import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Details from "./pages/details/Details";
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  {
    path: "/",
    element: <App />
  },
  {
    path:"/details/:id",
    element: <Details />
  }
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
