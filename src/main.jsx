import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import BooksDetails from './components/BooksDetails/BooksDetails';
import BooksTabs from './components/BooksTabs/BooksTabs';


import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'book/:booksId',
        element: <BooksDetails></BooksDetails>,
        loader: ()=> fetch('./booksData.json'),
        
      },
      {
        path: 'booksTabs',
        loader: ()=> fetch('./booksData.json'),
        element: <BooksTabs></BooksTabs>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      }
    ]

  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer/>
  </StrictMode>,
)
