import React from "react";
import ratingImg from "../assets/rating.svg";
import edit from "../assets/edit.svg";

export interface IMenuCard {
    image: any;
    title: string;
    rating: number;
    price: number;
    onEditClick?: () => void;
}

const MenuCard = ({ image, title, rating, price, onEditClick }: IMenuCard) => {
    return (
        <div className="flex w-full p-5 even-shadow rounded-2xl items-center gap-[1rem] max-w-[500px]">
            <div className="rounded-full overflow-hidden max-w-[25%]">
                <img src={image} />
            </div>
            <div className="flex basis-full flex-col justify-start">
                <div>{title}</div>
                <div className="flex gap-1">
                    <img src={ratingImg} />
                    <span>{rating}</span>
                </div>
                <div>$ {price}</div>
            </div>
            <button
                className="bg-[#FBCD97] rounded-full min-w-[24px] min-h-[24px]"
                onClick={onEditClick}
            >
                <img src={edit} />
            </button>
        </div>
    );
};

export default MenuCard;
