import React from "react";

import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";
import styles from "../styles";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col sm:pt-8 pt-6 sm:pb-16 pb-6`}
        >
            <div
                className={`flex-1 ${styles.flexStart} ${styles.paddingX} flex-col xl:px-0`}
            >
                <div className="flex flex-row items-center py-[6px] pl-4 pr-5 bg-discount-gradient rounded-[10px] mb-2">
                    <img
                        src={discount}
                        alt="discount"
                        className="xs:w-[32px] w-[24px] xs:h-[32px] h-[24px] mr-2"
                    />
                    <p className="font-poppins font-normal text-dimWhite text-[16px] ss:leading-[30.8px] leading-[24px] uppercase">
                        <span className="text-white">20%</span> Discount for{" "}
                        <span className="text-white"> 1 Month</span> Account
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold lg:text-[64px] ss:text-[52px] text-[40px] text-white lg:leading-[80px] ss:leading-[75px] leading[56px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Generation</span>{" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>
                <h1 className="font-poppins font-semibold lg:text-[60px] ss:text-[52px] text-[40px] text-white lg:leading-[80px] ss:leading-[75px] leading[56px] w-full">
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    A smart solution for modern payment methods, storage and
                    monitoring of annual cash flows to suit your needs. Nicebank
                    is not just any bank. Nicebank is here as a gift to you.
                </p>
            </div>

            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                <img
                    src={robot}
                    alt="robot"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    );
};

export default Hero;
