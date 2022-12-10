import React from "react";
import EditButton from "./editButton";
import starbucks from "../_demo_assets/starbucksLogo.png";
import edit from "../assets/edit.svg";

const ProfileEdit = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto my-0 w-full">
            <div className="rounded-full relative mb-10">
                <img
                    src={starbucks}
                    className="max-w-[200px]"
                />
                <div className="absolute bottom-0 right-0 rounded-full bg-[#FBCD97]">
                    <img src={edit} />
                </div>
            </div>
            <form className="flex flex-col gap-8 mb-10 w-full px-10">
                <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input className="border-2 border-[#AAAAAA] rounded-md md:min-h-[3rem] " />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Description</label>
                    <input className="border-2 border-[#AAAAAA] rounded-md md:min-h-[3rem]" />
                </div>
            </form>
            <div className="justify-self-start text-[#FEB054] text-lg mb-4">
                Link Address
            </div>
            <EditButton text="Done" />
        </div>
    );
};

export default ProfileEdit;
