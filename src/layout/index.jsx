import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import HeaderLeft from "../components/header/HeaderLeft";
import Categories from "../components/categories/Categories";
import BottomNav from "../components/bottomnav/BottomNav";

import { AppContext } from "../context/Context";

const Layout = () => {
  const { values } = useContext(AppContext);

  return (
    <Fragment>
      <div className={`app-layout ${values ? 'sidebar-open' : 'sidebar-closed'}`}>
        <header className="app-header">
          <Header />
        </header>

        <aside className="app-sidebar">
          <div className="sidebar-container">
            <HeaderLeft />
          </div>
        </aside>

        {/* Overlay for mobile when sidebar is open */}
        {values && (
          <div
            className="sidebar-overlay"
            onClick={() => setValues(false)}
          ></div>
        )}

        <main className="app-main">
          {/* Categories bar stays at the top of the main content area */}
          <Categories />
          <div className="main-content">
            <Outlet />
          </div>
        </main>

        <BottomNav />
      </div>
    </Fragment>
  );
};

export default Layout;
