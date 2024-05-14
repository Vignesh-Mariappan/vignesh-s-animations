import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import HomeHero from './pages/HomeHero/HomeHero';
import AnimationList from './pages/AnimationList/AnimationList';
import Animations from './pages/Animations/Animations';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeHero />,
    },
    {
      path: "/animation-list",
      element: <AnimationList />,
    },
    {
      path: "/animation/:animationId",
      element: <Animations />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
