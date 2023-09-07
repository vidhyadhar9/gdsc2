import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Events from './components/Events'
import Home from './components/Home'
import Clubs from './components/Clubs'
import RootLayout from './components/RootLayout';
import ActivityLog from './components/ActivityLog';
import AdminLogin from './components/AdminLogin';
import Acm from './components/Acm'; 
import Gdsc from './components/Gdsc'; 
import Two from './components/Two';
import AdminHome from './components/AdminHome';
import Three from './components/Three';
import ClubLeadHome from './components/ClubLeadHome';
import ClubLeadLogin from './components/ClubLeadLogin';
import Booking from './components/Booking';

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        //route for Home
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/home",
          element:<Home/>
        },
       
        //route for Events
        {
          path:"/events",
          element:<Events/>
        },
        //route for ActivityLog
        {
          path:"/activitylog",
          element:<ActivityLog/>
        },
        {
          path:"/adminlog",
          element:<AdminLogin/>
        },
        {
          path:"/clubleadlog",
          element:<ClubLeadLogin/>
        },
         //route for Clubs
         {
          path:"/clubs",
          element:<Clubs/>,
          children:[
            {
              path:"acm",
              element:<Acm/>
            },
            {
              path:"gdsc",
              element:<Gdsc/>
            }
          ]
       },
      ]
      
    },{
      path:"/two",
      element:<Two/>,
      children:[
         //route for Home
         {
          path:"/two",
          element:<Events/>
        },
       {
        path:"AdminHome",
        element:<AdminHome/>

       },
      
        //route for ActivityLog
        {
          path:"activitylog",
          element:<ActivityLog/>
        }

      ]
    },{
      path:"/three",
      element:<Three/>,
      children:[
         //route for Home
         {
          path:"/three",
          element:<ClubLeadHome/>
        },
       
        //route for Events
        {
          path:"events",
          element:<Events/>
        },
        //route for ActivityLog
        {
          path:"activitylog",
          element:<ActivityLog/>
        },
        {
          path:"book",
          element:<Booking/>
        }

      ]
    }

  ])



  return (
    <div >
         {/*Provide Browse router */}
         <RouterProvider router={router}/>
    </div>
  );
}

export default App;
