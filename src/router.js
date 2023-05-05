import React from 'react';
import{createBrowserRouter}from "react-router-dom";

import Rootlayout from './component/Rootlayout';
import Home from './pages/Home';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import History from './pages/History';
import Cards from './component/Cards';
import Playvideo from './component/Playvideo';

const router = createBrowserRouter([
    
    {
        path:"/",
        element:<Rootlayout/>,
        children:[
            {
            path:"/Home",
            element:<Home/>
        },
            {
            path:"Shorts",
            element:<Shorts/>
        },
            {
            path:"Subscriptions",
            element:<Subscriptions/>
        },
            {
            path:"Library",
            element:<Library/>
        },
            {
            path:"History",
            element:<History/>
        },
       
    

        ]
       
    
    },{
        path:"/videos/:id",
        element:<Playvideo/>,

    }


])
 


export default router