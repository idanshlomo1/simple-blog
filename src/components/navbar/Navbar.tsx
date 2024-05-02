"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import NavLink from "./links/navLink/navLink";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },

    ];

    // Temp variables for session and admin status
    const session = true;
    const isAdmin = true;

    return (
        <div>
            <MaxWidthWrapper className="py-6">

                {/* lg devices nav */}
                <div className="md:block hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo on the left */}
                        <div className="flex-grow-0 ">
                            Logo
                        </div>

                        {/* Navigation links in the center */}
                        <div className="flex-grow  md:flex justify-center">
                            {links.map((link) => (
                                <Link
                                    className=" flex justify-center"
                                    href={link.path}
                                    key={link.title}
                                >
                                    <Button
                                        variant={"outline"}
                                    >

                                        {link.title}
                                    </Button>

                                </Link>
                            ))}
                        </div>

                        {/* Admin, Logout, Login, and ModeToggle on the right */}
                        <div className="flex-grow-0 flex justify-end items-center">
                            {session ? (
                                <>
                                    {isAdmin && (
                                        <Link href="/admin">
                                            <Button variant={"default"}>
                                                Admin
                                            </Button>
                                        </Link>
                                    )}
                                    <Button variant={"outline"}>Logout</Button>
                                </>
                            ) : (
                                <Link href="/login">
                                    <Button variant={"outline"}>
                                        Login
                                    </Button>
                                </Link>
                            )}
                            <div className="ml-4">
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                </div>


                {/* sm devices nav */}
                <div className="md:hidden">

                    {/* Logo and Burger */}
                    <div className="flex items-center justify-between">


                        <div className="flex-grow">
                            Logo
                        </div>

                        <div className="z-icon relative flex-grow-1 ">
                            <input
                                type="checkbox"
                                id="checkbox"
                                onClick={() => { setOpen(prev => !prev) }}
                                className="toggle-checkbox"
                            />
                            <label htmlFor="checkbox" className="toggle">
                                <span className="bars" id="bar1"></span>
                                <span className="bars" id="bar2"></span>
                                <span className="bars" id="bar3"></span>
                            </label>
                        </div>
                    </div>

                    {
                        open &&
                        <>
                            <div className={`absolute right-0 left-[0%] z-nav  min-h-screen  duration-500 ease-out  ${open ? 'top-0 ' : 'top-[-850px]'} duration-500 '}`}>
                                <div className="pt-20" >
                                    <div className=" flex flex-col">
                                        <div >
                                            {links.map((link) => (
                                                <div className="flex justify-center">
                                                    <Link
                                                        className=" flex justify-center"
                                                        href={link.path}
                                                        key={link.title}
                                                    >
                                                        <Button
                                                            variant={"outline"}
                                                            className="w-40"
                                                        >

                                                            {link.title}
                                                        </Button>

                                                    </Link>
                                                </div>

                                            ))}
                                        </div>

                                        {session ? (
                                            <div className="mt-8 flex flex-col items-center"> {/* Ensures center alignment */}
                                                {isAdmin &&
                                                    <Link
                                                        className="w-40" // Apply width here and margin for spacing
                                                        href="/admin"
                                                    >
                                                        <Button
                                                            variant="default"
                                                            className="w-40"
                                                        >
                                                            Admin
                                                        </Button>
                                                    </Link>
                                                }
                                                <Button
                                                    variant="outline"
                                                    className="w-40" // Consistent width
                                                >
                                                    Logout
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="mt-8 flex justify-center"> {/* Center alignment for login */}
                                                <Link
                                                    href="/login"
                                                    className="w-40" // Consistent width
                                                >
                                                    <Button
                                                        variant="outline"
                                                    >
                                                        Login
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}

                                        <div className="mt-8 flex justify-center">
                                            <ModeToggle />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </MaxWidthWrapper>

        </div>
    );
};

export default Navbar
