import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import FetchFox from "./components/fetchFox.tsx/FetchFox";
import Feedback from "./components/feedback/Feedback";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import FormGender from "./components/formGender/FormGender";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import Store from "./components/store/Store";
import StorePage from "./components/store/StorePage";
import React from 'react';
import {CartProvider} from "./context/CartContext";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'fetch-fox',
    element: <FetchFox />
  },
  {
    path: 'feedback',
    element: <Feedback />
  },
  {
    path: 'store',
    element: <Store />
  },
  {
    path: 'store/:id',
    element: <StorePage />
  },
  {
    path: '*',
    element: <NoPage />
  },
  {
    element: <Lesson01 />,
    path: 'React-intro'
  },
  {
    element: <Lesson03 />,
    path: 'JSX-components'
  },
  {
    element: <Lesson03 />,
    path: 'React-Props'
  },
  {
    element: <h1>Lesson 4</h1>,
    path: 'React-UseState-hook'
  },
  {
    element: <h1>Lesson 5</h1>,
    path: 'React-Map-components'
  },
  {
    element: <Lesson06 />,
    path: 'React-TS'
  },
  {
    element: <Lesson07 />,
    path: 'React-TS-2'
  },
  {
    element: <Lesson08 />,
    path: 'UseEffect-hook'
  },
  {
    element: <Lesson09 />,
    path: 'CSS-modules'
  },
  {
    element: <Lesson10 />,
    path: 'React-test'
  },
  {
    element: <h1>Lesson 11: routing</h1>,
    path: 'React-router-dom'
  },
  {
    element: <Lesson12 />,
    path: 'Formik'
  },
  {
    element: <Lesson13 />,
    path: 'Yup'
  },
  {
    element: <Lesson14 />,
    path: 'Dynamic-routing'
  },
  {
    element: <ProductPage />,
    path: 'products/:id'
  },
  {
    element: <FormGender/>,
    path: 'form-gender'
  },
  {
    element: <Cart />,
    path: 'cart'
  },
  {
    element: <Products />,
    path: 'products'
  }
];

function App() {

  return (
    // 1. оборачиваем все приложение в HashRouter
    // 2. все маршруты оборачиваем в Routes
    // 3. начинаем описывать структуру с корневого маршрута с Layout
      <CartProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(route => (
            <Route path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
      </CartProvider>
  );
}

export default App;
