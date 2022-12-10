import React, { useEffect, useState } from "react";
import MenuAddCard from "./menuAddCard";
import MenuCard from "./menuCard";
import caramel from "../_demo_assets/caramelMach.webp";
import EditButton from "./editButton";
import MenuEditForm from "./menuEditForm";

const initialMenuItems = [
    { image: caramel, title: "Caramel Macchiato", rating: 3.8, price: 400 },
    { image: caramel, title: "Caramel Macchiato", rating: 3.8, price: 400 },
    { image: caramel, title: "Caramel Macchiato", rating: 3.8, price: 400 },
    { image: caramel, title: "Caramel Macchiato", rating: 3.8, price: 400 },
];

const initialMenuItemsFn = () => {
    return initialMenuItems;
};

export interface IMenuItem {
    image: any;
    title: string;
    rating: number;
    price: number;
}

const MenuEdit = () => {
    const [menuItems, setMenuItems] = useState<IMenuItem[]>(initialMenuItemsFn);
    const [currentMenuItem, setCurrentMenuItem] = useState<IMenuItem | null>(
        null
    );
    const [currentMenuItemIndex, setCurrentMenuItemIndex] =
        useState<number>(-1);

    useEffect(() => {
        setCurrentMenuItem(menuItems[currentMenuItemIndex]);
    }, [currentMenuItemIndex]);

    useEffect(() => {
        if (!currentMenuItem) return;
        setMenuItems((prevMenu) =>
            prevMenu.map((prevMenuItem, index) =>
                index === currentMenuItemIndex ? currentMenuItem! : prevMenuItem
            )
        );
    }, [currentMenuItem?.title, currentMenuItem?.price]);

    return (
        <div className="hidden md:flex w-full relative top-[2rem]">
            <div className="flex-1">
                <div className="flex justify-between w-full px-6 items-center mb-10">
                    <div className="text-4xl self-center">Menu</div>
                    <EditButton className="md:hidden" />
                </div>
                <div className="px-6 w-full gap-3 flex flex-col">
                    <MenuAddCard />
                    {menuItems.map((menuItem, index) => (
                        <MenuCard
                            image={menuItem.image}
                            title={menuItem.title}
                            rating={menuItem.rating}
                            price={menuItem.price}
                            onEditClick={() => setCurrentMenuItemIndex(index)}
                        />
                    ))}
                </div>
            </div>
            <MenuEditForm
                currentMenuItem={currentMenuItem}
                setCurrentMenuItem={setCurrentMenuItem}
            />
        </div>
    );
};

export default MenuEdit;
