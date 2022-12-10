import React from "react";
import MenuAddCard from "./menuAddCard";
import MenuCard from "./menuCard";
import caramel from "../_demo_assets/caramelMach.webp";
import EditButton from "./editButton";

const RestaurantMenu = () => {
    return (
        <div className="flex flex-1 flex-col items-center">
            <div className="flex justify-between w-full px-6 items-center mb-10">
                <div className="text-4xl self-center">Menu</div>
                <EditButton className="md:hidden" />
            </div>
            <div className="px-6 w-full gap-3 flex flex-col">
                <MenuAddCard />
                <MenuCard
                    image={caramel}
                    title={"Caramel Macchiato"}
                    rating={3.8}
                    price={400}
                />
                <MenuCard
                    image={caramel}
                    title={"Caramel Macchiato"}
                    rating={3.8}
                    price={400}
                />
                <MenuCard
                    image={caramel}
                    title={"Caramel Macchiato"}
                    rating={3.8}
                    price={400}
                />
                <MenuCard
                    image={caramel}
                    title={"Caramel Macchiato"}
                    rating={3.8}
                    price={400}
                />
            </div>
        </div>
    );
};

export default RestaurantMenu;
