import React from "react";

const OfferCard = ({ discount }: { discount: number }) => {
    return (
        <div className="flex w-full px-5 py-8 rounded-2xl items-center gap-[1rem] text-5xl bg-[#D9D9D9] justify-center">
            {discount}% off
        </div>
    );
};

export default OfferCard;
