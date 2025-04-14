/* eslint-disable import/order */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@/styles/globals.css";
import { Provider } from "react-redux";

import { Provider as NextProvider } from "./provider.tsx";
import { router } from "./routes/router.tsx";
import { persistor, store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster richColors position="top-right" />
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </NextProvider>
  </React.StrictMode>
);
