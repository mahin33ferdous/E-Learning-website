import { createBrowserRouter } from "react-router-dom";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Header from "../../Component/Header/Header";
import Main from "../../Component/Layout/Main/Main";
import Home from "../../Page/Home/Home";
import CategoryCourses from "../../Page/CategoryCourses/CategoryCourses";
import CourseDetails from "../../Page/CourseDetails/CourseDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Enroll from "../../Component/Enroll/Enroll";

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
                path:"/category/:id",
                element:<CategoryCourses></CategoryCourses>,
                loader:({params})=>fetch(`http://localhost:5001/category/${params.id}`)
               },

           {
                path:"/courses/:id",
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>fetch(`http://localhost:5001/courses/${params.id}`)
               },

               {
        
                path:"/enroll",
                element:<PrivateRoutes><Enroll></Enroll></PrivateRoutes> 
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