import React, { Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WithSuspense from "@/components/withSuspense"

const RandomComponent = React.lazy(() => import("./pages"))
const ErrorPage = React.lazy(() => import("@/pages/errorPage"))
const AboutPage = React.lazy(() => import("@/pages/about"))
const Products = React.lazy(() => import("@/pages/products"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <RandomComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: (
          <WithSuspense>
            <AboutPage />
          </WithSuspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/products",
        element: (
          <WithSuspense>
            <Products />
          </WithSuspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
