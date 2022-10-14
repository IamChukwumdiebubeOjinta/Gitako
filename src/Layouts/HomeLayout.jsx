import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function HomeLayout({ children }) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full flex flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
        {/* <label
      htmlFor="my-drawer-2"
      className="btn btn-primary drawer-button lg:hidden"
    >
      Open drawer
    </label> */}
      </div>
      <Sidebar />
    </div>
  );
}
