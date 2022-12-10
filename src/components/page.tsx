import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import navigation from "../assets/navigation.svg";
import plus from "../assets/plus.svg";
import camera from "../assets/camera.svg";
import wheel from "../assets/wheel.svg";
import search from "../assets/search.svg";
import dashboard from "../assets/dashboard.svg";
import bookmark from "../assets/bookmark.svg";
import settings from "../assets/settings.svg";

const hamburgerMenu = [
    { img: dashboard, name: "Dashboard" },
    { img: navigation, name: "Explore" },
    { img: plus, name: "Create Post" },
    { img: camera, name: "Scan me" },
    { img: wheel, name: "Offers" },
    { img: wheel, name: "My Reviews" },
    { img: bookmark, name: "Saved" },
    { img: settings, name: "Settings" },
];

const Page = ({ children }: { children: React.ReactNode }) => {
    const [showHamburger, setShowHamburger] = useState<boolean>(false);
    console.log(showHamburger);
    const Hamburger = (
        <div
            className={`fixed md:relative bg-[#FFD19BEB] top-0 left-0 h-screen ${
                showHamburger
                    ? "w-auto pl-[2rem] pr-[1rem] md:pr-[3rem] pb-[2rem] md:min-w-[15%]"
                    : "w-0"
            } transition-all overflow-hidden z-[100] `}
        >
            <div className="relative flex items-center gap-[8px] top-[15px] p-1 md:min-w-[15%] whitespace-nowrap">
                <button onClick={() => setShowHamburger(false)}>
                    <img
                        src={hamburger}
                        className="w-[25px] h-[40px]"
                    />
                </button>
                <span className="hidden md:block">logo</span>
            </div>
            <ul className="space-y-[1rem] relative top-[30px]">
                {hamburgerMenu.map((item) => {
                    return (
                        <li className="flex items-center gap-[8px] whitespace-nowrap">
                            <img
                                src={item.img}
                                className="w-[25px] h-[40px]"
                            />
                            <span>{item.name}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

    const Header = (
        <header className={`flex justify-between py-3 px-5 h-[70px]`}>
            <div
                className={`flex items-center justify-end space-x-[1rem] ${
                    showHamburger && "invisible md:hidden"
                }`}
            >
                <button
                    onClick={() => setShowHamburger(true)}
                    className="w-[25px] h-[40px]"
                >
                    <img src={hamburger} />
                </button>
                <span className="hidden md:block">logo</span>
            </div>
            <div className="hidden md:flex items-center w-auto basis-full min-w-[150px] mx-[1rem]">
                <div
                    className={`relative w-full max-w-[916px] ${
                        showHamburger ? "mr-1rem w-full" : "mx-auto"
                    } my-0 h-full`}
                >
                    <button className="absolute top-0 left-0 flex items-center h-full">
                        <img
                            src={search}
                            className="scale-[0.6] left-[10px] relative"
                        />
                    </button>
                    <input
                        className="w-full rounded-full shadow-md pl-[35px] h-full"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="flex md:hidden z-[100] items-center justify-self-center">
                logo
            </div>
            <div className="flex space-x-[2.1rem] justify-start">
                {[navigation, plus, camera, wheel].map((el) => (
                    <button className="hidden md:block w-[25px] h-[40px]">
                        <img src={el} />
                    </button>
                ))}
                <div>""</div>
            </div>
        </header>
    );

    return (
        <div className="md:flex">
            {Hamburger}
            <div className="w-full">
                {Header}
                {children}
            </div>
        </div>
    );
};

export default Page;
