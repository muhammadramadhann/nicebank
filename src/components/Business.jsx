import React from "react";

import Button from "./Button";
import { features } from "../constants";
import styles, { layout } from "../styles";

const FeaturedCard = ({ icon, title, content, index }) => (
    <div
        className={`flex ss:flex-row flex-col ss:p-6 p-4 rounded-[20px] ${
            index !== features.length - 1 ? "ss:mb-6 mb-2" : "mb-0"
        } feature-card`}
    >
        <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue ss:mb-0 mb-3`}
        >
            <img
                src={icon}
                alt="icon"
                className="w-[50%] h-[50%] object-contain"
            />
        </div>
        <div className="flex-1 flex flex-col ss:ml-3 ml-0">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
);

const Business = () => (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                You do the business, <br className="ss:block hidden" /> we’ll
                handle the money.
            </h2>
            <p className={`${styles.paragraph} ss:max-w-[500px] mt-5`}>
                Accept all transactions from various payment methods. Your
                customers can choose to use e-Money, credit or debit card. We
                will arrange all that just for you anytime, anywhere.
            </p>
            <Button styles="xs:mt-10 mt-5" />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeaturedCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

export default Business;
