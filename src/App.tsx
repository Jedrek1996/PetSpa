import HomePage from "./pages/HomePage/HomePage";
import MainContainer from "./pages/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
