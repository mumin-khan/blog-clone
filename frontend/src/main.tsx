import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signin from './pages/Signin.tsx';
import Signup from './pages/Signup.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Blog from './pages/Blog.tsx';
import Blogs from './pages/Blogs.tsx';
import AppBar from './components/AppBar.tsx';
import CreateBlog from './pages/CreateBlog.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"signup",
    element: <Signup/>
  },
  {
    path:"signin",
    element:<Signin/>
  },
  {
    path:"blogs",
    element:<Blogs/>
  },
  {
    path: "blog/:id",
    element: <Blog />,
  },
  {
    path:"create-blog",
    element:<CreateBlog/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <AppBar/>
        <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
