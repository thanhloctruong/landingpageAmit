import React from 'react';
import { routers } from '../router';
import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex justify-around">
            <div className="header__logo text-3xl font-bold m-3" >
                <Link href='/'>
                    <a>
                        tails.
                    </a>
                </Link>
            </div>
            <div className='header__navbar'>
                <ul className="flex justify-around">
                    {
                        routers.map((router) => {
                            return (
                                <li key={router.name} className='m-6'>
                                    <Link href={router.path}>
                                        <a>
                                            {router.name}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="header_option">
                <button className="m-3 bg-transparent hover:bg-green-400 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-700 hover:border-transparent rounded">
                    Đăng Nhập
                </button>
                <button className="m-3 bg-green-400 hover:bg-green-400 text-white font-semibold hover:text-white py-2 px-4 border border-black-700 hover:border-transparent rounded">
                    Đăng Kí
                </button>
            </div>
        </div>
    );
};

export default Header;