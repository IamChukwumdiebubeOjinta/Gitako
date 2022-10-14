import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

function MyMenu({ header }) {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="bg-[#D9D9D9] py-[6.5px] inline-flex items-center justify-center rounded-md bg-opacity-20 px-4 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <h3 className="text-[12px] leading-[15px] font-bold">{header}</h3>
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-black hover:opacity-10"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute flex flex-col right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((link) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                <a
                  href={link.href}
                  className={`w-full p-5 ${
                    active ? "bg-[#87D087] text-white" : "bg-white text-black"
                  }`}
                >
                  {link.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MyMenu;
