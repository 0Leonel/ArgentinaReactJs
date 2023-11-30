import { RouterProvider } from "react-router-dom"
import { RootProvider } from "./core/provides/root_provider"
import { appRouter } from "./core/routes/appRouter"	
const  App =()=> {
  
  return (
      <>
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
      </>
  )
}

export default App
