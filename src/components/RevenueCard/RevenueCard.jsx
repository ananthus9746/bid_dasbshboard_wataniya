import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import styles from './RevenueCard.module.css';

const RevenueCard = () => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>New</p>
            <div className={styles.badge}>
                <span>+17%</span>
                <MdArrowOutward/>
            </div>
            <p className={styles.value}>$120,873</p>
        </div>
    );
};

export default RevenueCard;
