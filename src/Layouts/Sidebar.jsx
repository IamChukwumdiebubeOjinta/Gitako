import Logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sideBar } from "../Constants/Index";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Sidebar = () => {
  const [isShowing, setIsShowing] = useState(false);
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
          {sideBar.map((item) => (
            <Disclosure key={item.id}>
              <li>
                <Disclosure.Button
                  className="flex w-full justify-between text-left text-sm font-medium hover:bg-white hover:text-black focus:outline-none
                   focus:text-black focus:bg-white focus-visible:ring focus-visible:ring-opacity-75"
                >
                  {item.name}
                  {item.options && (
                    <ChevronRightIcon
                      className={`${open ? "rotate-90 transform" : ""} h-5 w-5`}
                    />
                  )}
                </Disclosure.Button>
                {item.options && (
                  <Transition
                    enter="transition-opacity duration-150 ease-in"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className='px-0 py-0'
                  >
                    <Disclosure.Panel className=" w-full text-sm text-gray-500 flex flex-col">
                      {item?.options?.map((i) => (
                        <Link
                          key={i.id}
                          to={i.name}
                          className="hover:bg-base-100 w-full px-[1rem] transition-all duration-100 py-2"
                        >
                          {i.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                )}
              </li>
            </Disclosure>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
