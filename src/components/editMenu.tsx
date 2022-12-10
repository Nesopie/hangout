import React from "react";
import profile from "../assets/profile.svg";
import menu from "../assets/menu.svg";
import wheel from "../assets/wheel.svg";
import stats from "../assets/stats.svg";
import arrow from "../assets/arrow.svg";
import { TEditItem } from "./restaurantEdit";

interface IEditMenu {
    editItem: TEditItem;
    setEditItem: React.Dispatch<React.SetStateAction<TEditItem>>;
}

const editMenu = [
    { image: profile, name: "Profile" },
    { image: menu, name: "Menu" },
    { image: wheel, name: "Offers" },
    { image: stats, name: "Statistics" },
];

const EditMenu = ({ editItem, setEditItem }: IEditMenu) => {
    return (
        <div className="hidden md:block pl-5 pr-[4rem] border-r-2 relative top-[2rem] min-w-[15%]">
            <ul className="space-y-[1rem] ">
                {editMenu.map((item) => {
                    return (
                        <li
                            className={`flex items-center gap-[8px] ${
                                editItem === item.name ? "ml-[12px]" : "ml-0"
                            } w-full`}
                            onClick={(e) => setEditItem(item.name as TEditItem)}
                        >
                            <img
                                src={item.image}
                                className="w-[25px] h-[40px]"
                            />
                            <span>{item.name}</span>
                            {editItem === item.name && (
                                <img
                                    className="w-[12px] h-[12px]"
                                    src={arrow}
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default EditMenu;
