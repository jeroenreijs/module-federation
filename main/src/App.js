import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";

const RemotePages = React.lazy(() => import("pages/App"));
const RemotePageBuilder = React.lazy(() => import("pagebuilder/App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "pages",
    element: (
      <Suspense fallback="Loading Pages...">
        <RemotePages />
      </Suspense>
    ),
  },
  {
    path: "pagebuilder",
    element: (
      <Suspense fallback="Loading Page Builder...">
        <RemotePageBuilder />
      </Suspense>
    ),
  },
]);

const App = () => {
  return (
    <Suspense fallback={"loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
