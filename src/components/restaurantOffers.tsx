import React from "react";
import EditButton from "./editButton";
import OfferCard from "./offerCard";

const RestaurantOffers = () => {
    return (
        <div className="flex flex-1 flex-col items-center">
            <div className="flex justify-between w-full px-6 items-center mb-10">
                <div className="text-4xl self-center">Offers</div>
                <EditButton className="md:hidden" />
            </div>
            <div className="px-6 w-full gap-3 flex flex-col mb-[1rem]">
                <OfferCard discount={40} />
                <OfferCard discount={40} />
            </div>
            <EditButton className="hidden md:block" />
        </div>
    );
};

export default RestaurantOffers;
