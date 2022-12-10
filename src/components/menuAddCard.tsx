import React from "react";
import plus from "../assets/plus.svg";

interface IMenuAddCard {
    onClick: () => void;
}

const MenuAddCard = () => {
    return (
        <div className="flex w-full justify-center py-10 even-shadow rounded-2xl items-center gap-[1rem] max-w-[500px]">
            <img src={plus} />
            <span className="text-3xl">Add</span>
        </div>
    );
};

export default MenuAddCard;
