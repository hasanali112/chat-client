/* eslint-disable import/order */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@/styles/globals.css";
import { Provider } from "react-redux";

import { Provider as NextProvider } from "./provider.tsx";
import { router } from "./routes/router.tsx";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </NextProvider>
  </React.StrictMode>
);
