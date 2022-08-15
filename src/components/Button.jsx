import React from "react";

const Button = ({ styles }) => {
    return (
        <button
            type="button"
            className={`py-4 px-6 bg-blue-gradient font-poppins 
                font-medium xs:text-[18px] text-[16px] text-primary outline-none rounded-[10px] ${styles}`}
        >
            Get Started
        </button>
    );
};

export default Button;
