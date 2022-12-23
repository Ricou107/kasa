import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import './index.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Error from './Pages/Error/Error';
import Accommodation from './Pages/Accommodation/Accommodation';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ({isError}) => (
  <>
    <Header />
    {isError ? <Error /> : <Outlet />}
    <Footer />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout isError={false} />} errorElement={<AppLayout isError={true} />}>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
    </Route>
  ));

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

