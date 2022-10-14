import React from "react";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu py-5 overflow-y-auto text-base-content w-[293px] bg-[#17181F]">
          <div className="flex flex-col gap-[21px] items-center justify-center">
            <img src={Logo} alt="logo" />

            <div className="mb-[35px] w-[79px] h-[76px]">
              <img
                className="mask mask-circle"
                src="https://placeimg.com/160/160/arch"
              />
            </div>
          </div>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
