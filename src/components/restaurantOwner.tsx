import React from "react";

import RestaurantMenu from "./restaurantMenu";
import RestaurantMeta from "./restaurantMeta";
import RestaurantOffers from "./restaurantOffers";

const RestaurantOwner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between px-[1rem] h-full z-[-1]">
            <RestaurantMeta />
            <RestaurantMenu />
            <RestaurantOffers />
        </div>
    );
};

export default RestaurantOwner;
