import React, { useEffect, useState } from "react";
import { IMenuItem } from "./menuEdit";
import edit from "../assets/edit.svg";
import EditButton from "./editButton";

interface IMenuEditForm {
    currentMenuItem: IMenuItem | null;
    setCurrentMenuItem: React.Dispatch<React.SetStateAction<IMenuItem | null>>;
}

const MenuEditForm = ({
    currentMenuItem,
    setCurrentMenuItem,
}: IMenuEditForm) => {
    console.log(currentMenuItem);
    const [name, setName] = useState<string>(currentMenuItem?.title || "");
    const [price, setPrice] = useState<number>(currentMenuItem?.price || 0);

    useEffect(() => {
        setName(currentMenuItem?.title || "");
        setPrice(currentMenuItem?.price || 0);
    }, [currentMenuItem]);

    if (!currentMenuItem) return null;
    return (
        <div className="flex flex-col items-center mx-auto my-0 relative top-[4rem] flex-1">
            <div className="rounded-full relative mb-10">
                <img
                    src={currentMenuItem.image}
                    className="max-w-[200px] rounded-full"
                />
                <div className="absolute bottom-0 right-0 rounded-full bg-[#FBCD97]">
                    <img src={edit} />
                </div>
            </div>
            <form className="flex flex-col gap-8 mb-10 w-full px-[1rem] pr-[3rem]">
                <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                        className="border-2 border-[#AAAAAA] rounded-md w-[100%] md:min-h-[3rem]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Price</label>
                    <input
                        type={"number"}
                        className="border-2 border-[#AAAAAA] rounded-md md:max-w-[50%] md:min-h-[3rem]"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                    />
                </div>
            </form>
            <EditButton
                text="Done"
                onClick={() => {
                    setCurrentMenuItem((prevItem) => ({
                        ...prevItem!,
                        title: name,
                        price,
                    }));
                }}
            />
        </div>
    );
};

export default MenuEditForm;
