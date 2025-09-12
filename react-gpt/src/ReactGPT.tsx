import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/router"

export const ReactGPT = () => {
  return (
    <RouterProvider router={router}/>
  )
}

// export const ReactGPT = () => {
//   return (
//     <h1 className="text-3xl font-bold underline border-2 border-red-500">
//       Hello world!
//     </h1>
//   )
// }