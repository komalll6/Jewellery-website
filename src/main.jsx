// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(<App/>)



// import{creatBrowserRouter, createBrowserRouter} from "react-router-dom";
// const router=createBrowserRouter([
//     {
//         path:"/",
//         element:"<App/>",
//     },
//     {
//         path:"home",
//         element:"Home",
//     },
//     {
//         path:"about",
//         element:"About",
//     },
//     {
//         path:"contact",
//         element:"Contact",
//     },
//     {
//         path:"help",
//         element:"Help",
//     },
// ])

import { createRoot } from 'react-dom/client'
import './index.css'
import Card from "./components/card.jsx";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"Card",
    element: <Card/>
  }
 
]);

createRoot(document.getElementById("root")).render(
   <RouterProvider router={router}/> 
);