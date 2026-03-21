// pages/index.js
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";



const MobileSidebar = () => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Menu */}
            <button
                className="p-2 text-xl text-white dark-bg rounded-md lg:hidden"
                onClick={toggleSidebar}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Overlay (fixes the issue) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 dark-bg text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                transition-transform duration-300 ease-in-out lg:hidden z-50`}
            >
                <ul className="flex flex-col p-4 space-y-2 flex-1">
                    <li>
                        <div className="header-brand-part flex items-center pointer mb-3">
                            <Link href={'/'} className="pointer brand-name" aria-label="Go to homepage">
                                <span className='brand-name2'>SARTAJ</span><span className='brand-name2 !bg-gray-100 !text-black px-2 py-1'>ALAM</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className={`block w-full text-lg px-4 py-2 hover:text-gray-400 rounded ${pathName === '/' ? 'bg-gray-100 text-black' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/work-experiences"
                            className={`block w-full text-lg px-4 py-2 hover:text-gray-400 rounded ${pathName.startsWith('/work-experiences') ? 'bg-gray-100 text-black' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Work Experiences
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className={`block w-full text-lg px-4 py-2 hover:text-gray-400 rounded ${pathName.startsWith('/projects') ? 'bg-gray-100 text-black' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/skills"
                            className={`block w-full text-lg px-4 py-2 hover:text-gray-400 rounded ${pathName.startsWith('/skills') ? 'bg-gray-100 text-black' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blogs"
                            className={`block w-full text-lg px-4 py-2 hover:text-gray-400 rounded ${pathName.startsWith('/blogs') ? 'bg-gray-100 text-black' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Blogs
                        </Link>
                    </li>
                </ul>
                {/* Sidebar Footer for About and Contact */}
                <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-700 bg-dark text-light bg-opacity-80">
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <Link
                                href={"/about"}
                                className={`block w-full text-lg px-4 py-2 hover:text-gray-400 rounded ${pathName.startsWith('/about') ? 'bg-gray-100 text-black' : ''}`}
                                onClick={toggleSidebar}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={`block w-full text-lg px-4 py-2 hover:text-gray-400 rounded ${pathName.startsWith('/contact') ? 'bg-gray-100 text-black' : ''}`}
                                onClick={toggleSidebar}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
