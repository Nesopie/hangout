import React, { useState } from "react";
import EditMenu from "./editMenu";
import MenuEdit from "./menuEdit";
import ProfileEdit from "./profileEdit";

export type TEditItem = "Profile" | "Menu" | "Offers";

const RestaurantEdit = () => {
    const [editItem, setEditItem] = useState<TEditItem>("Profile");
    return (
        <div className="flex">
            <EditMenu
                editItem={editItem}
                setEditItem={setEditItem}
            />
            {editItem === "Profile" ? <ProfileEdit /> : <MenuEdit />}
        </div>
    );
};

export default RestaurantEdit;
