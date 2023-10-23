'use client'
import { Provider } from "react-redux";
import store from "../store";
import { useEffect } from "react";

const Layout = ({ children }: {children: React.ReactNode}) => {
  useEffect(() => {
    // identify dark mode
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Layout;