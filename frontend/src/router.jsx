import { createBrowserRouter } from "react-router-dom"
import Notes from './pages/Notes'
import Root from "./pages/Root"
export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children:[
        {
          path: 'notes',
          element: <Notes/>
        },
      ]
    },
])