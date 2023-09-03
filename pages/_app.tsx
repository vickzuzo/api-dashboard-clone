import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppLayout } from "../components/layouts";
import { persistor, store } from "../store";
import "../styles/globals.css";

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
