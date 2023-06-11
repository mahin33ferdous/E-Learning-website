import { createBrowserRouter } from "react-router-dom";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Header from "../../Component/Header/Header";
import Main from "../../Component/Layout/Main/Main";
import Home from "../../Page/Home/Home";

export const routes= createBrowserRouter([

    {
        path:"/",
        element:< Main></Main>,
        children : [

            {
                path:"/",
                element:<Home></Home>
               },
        
           
           
            {
        
                path:"/login",
                element: <Login></Login>
               },
               {
                path:"/register",
                element: <Register></Register>
               }
        


        ]
    }
  
   


])