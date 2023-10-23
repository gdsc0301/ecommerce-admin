'use client'
import { Provider } from "react-redux";
import store from "../../store";
import Loading from "../../loading";
import { Suspense } from "react";

const Layout = ({ children, params }: {children: React.ReactNode, params: {slug: string}}) => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </Provider>
  )
}

export default Layout;