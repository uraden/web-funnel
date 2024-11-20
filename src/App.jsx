import './App.css'
import {ConfigProvider} from 'antd';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./layout/index";
import { Home, Form, SignUp, Carousel, Payment, PaymentMethod } from './pages';


function App() {  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Wrapper>
          <Home />
        </Wrapper>
      ),
    },
    {
      path: "/form",
      element: (
        <Wrapper>
          <Form />
        </Wrapper>
      ),
    },
    {
      path: "/signUp",
      element: (
        <Wrapper>
          <SignUp />
        </Wrapper>
      ),
    },
    {
      path: "/users",
      element: (
        <Wrapper>
          <Carousel />
        </Wrapper>
      ),
    }, 
    {
      path: "/payment",
      element: (
        <Wrapper>
          <Payment />
        </Wrapper>
      ),
    }, 
    {
      path: "/paymentMethod",
      element: (
        <PaymentMethod />
      )
    }
  ]);

  return (
    <>
      <ConfigProvider 
        theme={{
          token: {
            colorPrimary: "#E964C4",
            colorSuccess: "#E964C4"
          }
        }}
      >
      <RouterProvider router={router} />
      </ConfigProvider>
    </>
  )
}

export default App
