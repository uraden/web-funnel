import './App.css'
import {ConfigProvider} from 'antd';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./layout/index";
import Home from "./pages/Home/index";
import Form from "./pages/Form/index";
import SignUp from './pages/SignUp';

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
      path: "/signup",
      element: (
        <Wrapper>
          <SignUp />
        </Wrapper>
      ),
    }
  ]);

  return (
    <>
      <ConfigProvider 
        theme={{
          token: {
            colorPrimary: "#E964C4"
          }
        }}
      >
      <RouterProvider router={router} />
      </ConfigProvider>
    </>
  )
}

export default App
