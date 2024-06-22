import HomePage from "./pages/HomePage/HomePage";
import MainContainer from "./pages/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import ShopPage from "./pages/Shop/ShopPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "shop", element: <ShopPage /> },
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
