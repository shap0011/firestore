import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import Details from './pages/details/Details';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/details/:id",
    element: <Details />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
