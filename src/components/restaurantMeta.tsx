import React from "react";

import starbucksLogo from "../_demo_assets/starbucksLogo.png";
import location from "../assets/location.svg";
import EditButton from "./editButton";

const RestaurantMeta = () => {
    return (
        <div className="flex-1 md:mt-10">
            <div className="relative flex px-[2rem] flex-1 h-full flex-col items-center gap-2">
                <div className="max-w-[80%] rounded-full overflow-hidden">
                    <img src={starbucksLogo} />
                </div>
                <h3 className="text-lg font-semibold">Starbucks</h3>
                <div className="flex gap-[4px]">
                    <img src={location} />
                    <span>Gachibowli, Hyderabad</span>
                </div>
                <div className="pl-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                </div>
                <EditButton />
            </div>
        </div>
    );
};

export default RestaurantMeta;
