// pages/index.js
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaBriefcase, FaCogs, FaFileSignature, FaHeadphones, FaHome, FaUserAlt } from "react-icons/fa";
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
                className={`fixed top-0 left-0 h-full w-64 light-bg text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                transition-transform duration-300 ease-in-out lg:hidden z-50`}
            >
                <ul className="flex flex-col p-4 space-y-4">
                    <li>
                        <Link href={"/"} className="text-lg hover:text-gray-400" onClick={toggleSidebar}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/work-experience" className="text-lg hover:text-gray-400" onClick={toggleSidebar}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-lg hover:text-gray-400" onClick={toggleSidebar}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className="text-lg hover:text-gray-400" onClick={toggleSidebar}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="text-lg hover:text-gray-400" onClick={toggleSidebar}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-lg hover:text-gray-400" onClick={toggleSidebar}>
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileSidebar;
