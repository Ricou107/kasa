import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css';
import Home from './Pages/Home/Home';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Error from './Pages/Error/Error';
import Accommodation from './Pages/Accommodation/Accommodation';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
    {
    path: "about-us",
    element: <AboutUs />,
  },
    {
    path: "accommodation/:id",
    element: <Accommodation />,
  }
]);

root.render(
  <React.StrictMode>
      <Banner />
      <RouterProvider router={router} />
      <Footer />
  </React.StrictMode>
);

