import en from '../locales/en';
import th from '../locales/th';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head'

const Nav = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : th;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <>


            <div className="sticky top-0 right-0 left-0 bg-black z-40 ">

                <div className="relative bottom-0 py-3 px-5 text-white flex space-x-4 justify-between items-center mx-4 md:mx-8  ">
                    <div className='bg-blue-600 lg:hidden' >
                        <button>MENU</button>
                    </div>
                    <div className='w-20 h-20 '>
                        <Link href="/">
                            <a>

                                <Image
                                    src="/assets/logo-topper.png"
                                    alt='logo'
                                    width={80}
                                    height={80}
                                    objectFit='cover'

                                />
                            </a>
                        </Link>
                    </div>
                    <div className='hidden lg:flex space-x-4 overflow-auto'>

                        {t.nav.map((item) => (
                            <Link href={item.href} key={item.name}>
                                <a
                                    className='hover:text-red-600 text-sm  lg:text-xl text-center font-Db-Heaven tracking-[.1em]'
                                >
                                    {item.name}
                                </a>
                            </Link>
                        ))

                        }
                    </div>
                    <div>
                        <select
                            name="changeLocal"
                            onChange={changeLanguage}
                            defaultValue={locale}
                            className="text-white text-shadow-sm text-sm bg-transparent font-medium font-serif"
                        >
                            <option className="text-black rounded-none" value="en">EN</option>
                            <option className="text-black rounded-none" value="th">TH</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Nav;