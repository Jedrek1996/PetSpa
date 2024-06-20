import HomePage from "./pages/HomePage/HomePage";
import MainContainer from "./pages/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CarouselComp from "./pages/HomePage/CarouselComp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "test", element: <CarouselComp /> },
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
