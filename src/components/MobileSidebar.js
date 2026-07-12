"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const getSidebarLinkClass = (isActive) =>
    `mobile-sidebar-link block w-full text-lg px-4 py-2 rounded transition-colors ${
        isActive ? "mobile-sidebar-link-active" : "hover:text-gray-400"
    }`;

const MobileSidebar = () => {
    const pathName = usePathname();
    const hideCenterNav = pathName?.startsWith('/blog/');
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                className="mobile-menu-btn p-2 text-xl rounded-md lg:hidden"
                onClick={toggleSidebar}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            <div
                className={`mobile-sidebar-panel fixed top-0 left-0 h-full w-64 dark-bg text-white transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden z-50`}
            >
                <ul className="flex flex-col p-4 space-y-2 flex-1">
                    <li>
                        <div className="mobile-sidebar-brand header-brand-part flex items-center pointer mb-3">
                            <Link href={'/'} className="pointer brand-name" aria-label="Go to homepage" onClick={toggleSidebar}>
                                <span className='brand-name2'>SARTAJ</span>
                                <span className='brand-name2 mobile-sidebar-brand-accent'>ALAM</span>
                            </Link>
                        </div>
                    </li>
                    {!hideCenterNav ? (
                        <li>
                            <Link
                                href={"/"}
                                className={getSidebarLinkClass(pathName === '/')}
                                onClick={toggleSidebar}
                            >
                                Home
                            </Link>
                        </li>
                    ) : null}
                    {!hideCenterNav ? (
                        <>
                            <li>
                                <Link
                                    href="/work-experiences"
                                    className={getSidebarLinkClass(pathName.startsWith('/work-experiences'))}
                                    onClick={toggleSidebar}
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className={getSidebarLinkClass(pathName.startsWith('/projects'))}
                                    onClick={toggleSidebar}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/skills"
                                    className={getSidebarLinkClass(pathName.startsWith('/skills'))}
                                    onClick={toggleSidebar}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blogs"
                                    className={getSidebarLinkClass(pathName.startsWith('/blogs'))}
                                    onClick={toggleSidebar}
                                >
                                    Blogs
                                </Link>
                            </li>
                        </>
                    ) : null}
                </ul>
                <div className="mobile-sidebar-footer absolute bottom-0 left-0 w-full p-4 border-t border-gray-700">
                    <ul className="flex flex-col space-y-2">
                        {!hideCenterNav ? (
                            <li>
                                <Link
                                    href={"/about"}
                                    className={getSidebarLinkClass(pathName.startsWith('/about'))}
                                    onClick={toggleSidebar}
                                >
                                    About
                                </Link>
                            </li>
                        ) : null}
                        <li>
                            <Link
                                href="/contact"
                                className={getSidebarLinkClass(pathName.startsWith('/contact'))}
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
