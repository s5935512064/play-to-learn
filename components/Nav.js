import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import en from '../locales/en';
import th from '../locales/th';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Nav = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : th;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    })


    return (
        <>
            <Disclosure
                as="nav"


                className={classNames(
                    colorChange
                        ? "bg-[#010F2A]"
                        : "bg-[#010F2A] md:bg-transparent"
                    , "sticky top-0 inset-x-0 p-5 overflow-hidden z-40  transition-all duration-200")}
            >
                {({ open }) => (
                    <>
                        <div className="px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className=" inset-y-0 left-0 flex items-center md:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#676F7F]  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#676F7F]">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="w-full flex items-center justify-center md:items-stretch md:justify-start">


                                    <Link href="/">
                                        <div className="flex-shrink-0 flex items-center">


                                            <img
                                                className="block md:hidden h-20 w-20"
                                                src="/assets/logo-topper.png"
                                                alt="logo"
                                            />

                                            <img
                                                className="hidden md:block h-20 w-20"
                                                src="/assets/logo-topper.png"
                                                alt="logo"
                                            />
                                        </div>

                                    </Link>

                                    <div className="hidden w-full md:flex items-center justify-center">
                                        <div className="flex space-x-4 items-center text-center">
                                            {t.nav

                                                .map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-gray-900 text-[#836040]"
                                                                : "text-[#676F7F]  hover:text-white",
                                                            "px-3 py-2 rounded-md text-xl font-Db-Heaven font-semibold"
                                                        )}
                                                        aria-current={item.current ? "page" : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                        </div>
                                    </div>

                                </div>
                                <div >
                                    <select
                                        name="changeLocal"
                                        onChange={changeLanguage}
                                        defaultValue={locale}
                                        className="text-[#676F7F] text-shadow-sm text-sm bg-transparent font-medium"
                                    >
                                        <option className="text-black rounded-none" value="en">EN</option>
                                        <option className="text-black rounded-none" value="th">TH</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <Disclosure.Panel className="md:hidden my-5 h-[80vh] ">
                            <div className="px-2 pt-2 pb-3 space-y-1 ">
                                {t.nav.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? " text-[#836040]" : "text-[#676F7F]",
                                            "block px-3 py-2  text-base font-medium text-center bg-white bg-opacity-10"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>

                    </>
                )}
            </Disclosure>
        </>
    );
};

export default Nav;