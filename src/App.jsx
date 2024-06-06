import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Todos, { loader as todosLoader } from "./components/Todos"
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos/>,
    loader: todosLoader
    // children:[{
    //   path:"/",
    //   element: <h1>hello</h1>
    // }]
  },
]);
const App = () => {
  return <RouterProvider router={router} />
};

export default App;
