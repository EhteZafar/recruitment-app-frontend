// create a navbar for the app using tailwind css

import Link from "next/link"

const Navbar = () => {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-neutral-800 p-6">
            <div className="flex items-center flex-shrink-0 text-neutral-800 dark:text-neutral-200 mr-6">
                <span className="font-semibold text-xl tracking-tight">Recruitment App</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-neutral-800 dark:text-neutral-200 border-neutral-800 dark:border-neutral-200 hover:text-neutral-500 hover:border-neutral-500" type="button">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 0h20v20H0V0z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <Link legacyBehavior href="/"><a className="block mt-4 lg:inline-block lg:mt-0 text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 mr-4">
                    Home
                </a></Link>
                <Link legacyBehavior href="/signup"><a className="block mt-4 lg:inline-block lg:mt-0 text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 mr-4">
                    Sign Up
                </a></Link>
                <Link legacyBehavior href="/login"><a className="block mt-4 lg:inline-block lg:mt-0 text-neutral-800 dark:text-neutral-200 hover:text-neutral-500">
                    Login
                </a></Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;