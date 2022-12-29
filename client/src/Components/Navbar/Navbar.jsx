import React from 'react'
import './Navbar.css'
import {BrowserRouter, Link} from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav className="s px-2 sm:px-4 py-2.5 dark:bg-gray-900   dark:border-gray-600" style={{backgroundColor: '#000000'}}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                    <p className='text-2xl font-bold text-white'>Ma<span style={{color:'#7A86DD'}}>her</span></p>
                    </Link>
                    <div className="flex md:order-2">
                        <Link to="/Contactme"
                         type="button" className="text-white border hoVer focus:violet-400 font-medium text-sm px-10 py-2.5 text-center mr-3 md:mr-0 dark:bg-violet-400 dark:hover:bg-violet-400 dark:focus:violet-400">Contact me</Link>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                        <ul className=" nav flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block text-white  py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                            </li>
                            <li>
                            <Link to="/About" className="block text-white  py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                            <Link to="/Projects" className="block text-white  py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
                            </li>
                            <li>
                            <Link to="/Blogs"  className="block text-white  py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar