import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./layout/index";
import SignUp from "./pages/SignUp/index";

function App() {  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Wrapper>
          <SignUp />
        </Wrapper>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
