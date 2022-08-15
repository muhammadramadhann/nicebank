import React from "react";

import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
    <section id="product" className={`${layout.sectionReverse}`}>
        <div className={layout.sectionImgReverse}>
            <img
                src={bill}
                alt="billing"
                className="w-[100%] h-[100%] relative z-[5]"
            />
            <div className="absolute z[3] -left-1 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Easily control your <br className="sm:block hidden" /> billing &
                invoicing.
            </h2>
            <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
                Avoid fraudulent and uncontrolled transactions. We are here as
                the only modern digital bank with advanced features to monitor
                your billing and invoicing. Why don't you prove it directly?
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img
                    src={apple}
                    alt="apple-store"
                    className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer xs:mb-0 mb-2"
                />
                <img
                    src={google}
                    alt="google"
                    className="w-[128px] h-[42px] object-contain cursor-pointer xs:mb-0 mb-2"
                />
            </div>
        </div>
    </section>
);

export default Billing;
