import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componenets/About/About.jsx';
import Contact from './componenets/Contact/Contact.jsx';
// import ErrorPage from './componenets/Error/Error.jsx';
import Header from './componenets/Header/Header.jsx';
import User from './componenets/User/User.jsx';
import SingleUser from './componenets/User/SingleUser/SingleUser.jsx';
import Posts from './componenets/Posts/Posts.jsx';
import SinglePost from './componenets/Posts/SinglePost/SinglePost.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   },
//   // {
//   //   path: "/",
//   //   element: <Root />,
//   //   errorElement: <ErrorPage />,
//   // },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        element: <User></User>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/users/:usersid',
        element: <SingleUser></SingleUser>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersid}`)
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')

      },
      {
        path: '/posts/:postsid',
        element: <SinglePost></SinglePost>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsid}`)
      },
      {
        path: '/*',
        element: <div>page not pound</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header></Header> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
