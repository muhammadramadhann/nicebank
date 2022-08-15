import React from "react";

import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deal <br className="ss:block hidden" /> in
                few easy steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
                Process payments using cards with advanced technology that
                combines AI, machine learning, and complex formulas to assess
                the risk of each transaction.
            </p>
            <Button styles="xs:mt-10 mt-5" />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

export default CardDeal;
