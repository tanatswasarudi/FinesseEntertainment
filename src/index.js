import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Newproduct from "./Pages/Newproduct";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import {disableReactDevTools} from '@fvilers/disable-react-devtools'
import Shows from './Pages/shows'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path='booking' element={<Booking/>}/> */}
      <Route path="booking/:filterby" element={<Booking />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shows" element={<Shows/>}/>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="newproduct" element={<Newproduct />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
