import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LoginViews } from '../../features/login/views/loginViews'
import { HomeView } from '../../features/home/views/homeView'
import PublicRoute from '../../features/auth/components/public_route'
import PrivateRoute from '../../features/auth/components/private_route'
import { Layout } from '../layout/private_layout/Layout'
import { AppTareas } from '../components/Tarea/appTareas'
import { AppRecordatorio } from '../components/Recordatorio/appRecordatorio'
import { AppNotas } from '../components/Notas/appNotas'
import { AppPapelera } from '../components/Papelera/appPapelera'
import { AppFail } from '../components/404/appFail'

export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
      children:[
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: "/tareas",
          element: <AppTareas />,
        },
        {
          path: "/recordatorio",
          element: <AppRecordatorio/>
        },
        {
          path: "/notas",
          element: <AppNotas />,
        },
        {
          path: "/papelera",
          element: <AppPapelera />,
        },
      ]
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LoginViews />
        </PublicRoute>
      ),
    },
    // 404
    {
      path: "*",
      element: <AppFail/>,
    },
]);