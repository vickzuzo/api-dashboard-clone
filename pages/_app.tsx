import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";
import { AppLoader } from "../components/loaders/AppLoading";
import { AppLayout } from "../components/layouts";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  // init redux here
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </PersistGate>
    </Provider>
  );
}
