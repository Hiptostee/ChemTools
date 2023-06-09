/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  XMarkIcon,
  BeakerIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  UserCircleIcon,
  BoltSlashIcon,
  FireIcon,

} from "@heroicons/react/24/outline";

import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Molar Mass", href: "/masses", icon: BeakerIcon },
  { name: "Element Info", href: "/stats", icon: NewspaperIcon },
  { name: "Bond Type", href: "/bond", icon: CubeTransparentIcon },
  { name: "Oxidation States", href:"/oxidation", icon: BoltSlashIcon},
  { name: "Acid Base", href:"/acidbase", icon: FireIcon},
  { name: "About", href: "/about", icon: UserCircleIcon},

  
];
export default function Sidebar({ sidebarOpen, setSidebarOpen, page }) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-0 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-trangray-x-full"
              enterTo="trangray-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="trangray-x-0"
              leaveTo="-trangray-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col pt-5 pb-4 dark:bg-gray-900">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="xl:unhidden m-6 hidden mr-9 xl:inline-flex xl:h-48 xl:w-52 bg-gray-900"
                    src="/chemlogo.png"
                  />
                  <h4 className="text-same px-4 font-medium dark:text-gray-100">
                    Chem Tools Bro
                  </h4>
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 text-xl px-2">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <div
                          className={`${
                            page === item.name
                              ? "p-8 bg-gray-900 text-white"
                              : "p-8 text-gray-300 hover:bg-gray-700 hover:text-white"
                          }
													group flex text-xl items-center rounded-md px-2 py-2 font-medium`}
                        >
                          <item.icon
                            className={`${
                              page === item.name
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300"
                            }
														mr-4 h-6 w-6 flex-shrink-0`}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex w-48 lg:w-72 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col bg-gray-200 dark:bg-gray-900">
          <div className="flex h-36 lg:h-48 flex-shrink-0 items-center bg-gray-200 px-4 dark:bg-gray-900">
            <img
              className="xl:unhidden m-6 hidden mr-9 xl:inline-flex xl:h-48 xl:w-52 bg-gray-900"
              src="/chemlogo.png"
            />
          </div>
          <div className="flex flex-1 flex-col bg-gray-900 overflow-y-auto">
            <nav className="flex-1 space-y-1 bg-gray-200 px-8 py-4 dark:bg-gray-900">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <div
                    className={`${
                      page === item.name
                        ? "bg-gray-100 text-black dark:bg-gray-700 text-xl dark:text-white"
                        : "text-gray-500 hover:bg-gray-50 text-xl hover:text-black dark:text-gray-100 bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
										group cursor-pointer flex items-center rounded-md px-2 py-2 text-sm font-medium`}
                  >
                    <item.icon
                      className={`
											mr-3 h-6 w-6 bg-inherit flex-shrink-0`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
            <div className="m-2  font-semibold">
              <h1 className="bg-gray-900 justify-items-center text-center text-gray-500 dark:text-gray-100 text-sm">
                © Copyright 2023 JoeMoney, Professor Mishra, and Matthew Glasser
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
