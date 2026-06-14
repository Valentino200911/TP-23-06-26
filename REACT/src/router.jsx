import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './components/pages/Home'
import Error from './components/pages/Error'

export const router = createBrowserRouter([

    {
        path: "/",

        element: <App />,

        children: [

            {
                index: true,

                element: <Home />

            },

            {},

            {},

            {},

            {},


            {
                //errorRoute, por comodidad el html está escrito en Error.jsx

                path: "*",

                element: <Error />

            },

        ]

        

    }

])