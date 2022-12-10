import React from "react";

export interface IEditButton {
    className?: string;
    text?: string;
    onClick?: () => void;
}

const EditButton = ({ className, text, onClick }: IEditButton) => {
    return (
        <button
            className={`rounded-full bg-[#FBCD97] px-6 py-2 text-white ${className}`}
            onClick={onClick}
        >
            {text ?? "Edit"}
        </button>
    );
};

export default EditButton;
