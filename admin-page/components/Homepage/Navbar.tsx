"use client";

import React from "react";
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Button, buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "@/components/Homepage/Icons";
import Image, { StaticImageData } from 'next/image'
import Link from "next/link"
import logo from "@/components/assets/q-shop-logo-no-background.png"
import { ThemeToggle } from "@/components/ui/theme-toggle";


interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <a
                            rel="noreferrer noopener"
                            href="/"
                            className="ml-2 font-bold text-xl flex"
                        >
                            <LogoIcon />
                            <Image
                                src={logo}
                                width={200}
                                height={5}
                                className="bg-contain p-5"
                                alt="Logo Q-Shop"
                            />
                        </a>
                    </NavigationMenuItem>

                    {/* mobile */}
                    <span className="flex md:hidden">
                        <ThemeToggle />

                        <Sheet
                            open={isOpen}
                            onOpenChange={setIsOpen}
                        >
                            <SheetTrigger className="px-2">
                                <Menu
                                    className="flex md:hidden h-5 w-5"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <span className="sr-only">Menu Icon</span>
                                </Menu>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">
                                        Q-Shop
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {routeList.map(({ href, label }: RouteProps) => (
                                        <a
                                            rel="noreferrer noopener"
                                            key={label}
                                            href={href}
                                            onClick={() => setIsOpen(false)}
                                            className={buttonVariants({ variant: "ghost" })}
                                        >
                                            {label}
                                        </a>
                                    ))}
                                    <Button className="w-200 bg-violet-600">
                                        <Link href="/login">Sign In</Link>
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route: RouteProps, i) => (
                            <a
                                rel="noreferrer noopener"
                                href={route.href}
                                key={i}
                                className={`text-[17px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </a>
                        ))}
                        <Button className="w-200 bg-violet-600">
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                        <div className="hidden md:flex gap-2">
                            <ThemeToggle/>
                        </div>
                    </nav>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

