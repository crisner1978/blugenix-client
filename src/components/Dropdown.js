import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-location";
import { Fragment } from "react/cjs/react.production.min";
import { routes } from "router";

export default function Dropdown() {
  return (
    <div className="text-right -mb-2">
      <Menu as="div" className="relative inline-block text-center">
        {({ open }) => (
          <>
            <Menu.Button className="text-gray-500 dark:text-gray-300">
              {!open ? (
                <MenuIcon className="dropdownIcon" aria-hidden="true" />
              ) : (
                <XIcon className="dropdownIcon" aria-hidden="true" />
              )}
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="menuItems py-5">
                {routes.map(
                  ({
                    path,
                    element: {
                      type: { name },
                    },
                  }) => (
                    <div key={name}>
                      <Menu.Item className="text-xl tracking-widest">
                        {({ active }) => (
                          <Link
                            to={path}
                            getActiveProps={(location) => ({
                              style: { color: "rgb(37, 99, 235)" },
                            })}
                          >
                            <span className={`${active && "dropdownLinks"}`}>
                              {path === "/" ? "home" : path}
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  )
                )}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
