import React from 'react';
import styles from './RetailCard.module.css';
import { MdArrowOutward } from "react-icons/md";

const RetailCard = () => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>Retail</p>
            <div className={styles.topRightIcon}>
                <MdArrowOutward size={12} />
            </div>
            <div className={styles.valueContainer}>
                <p className={styles.value}>$51M</p>
                <div className={styles.badge_conta}>
                    <div className={styles.growthBadge}>
                        <span>+17%</span>
                        <MdArrowOutward  />
                    </div>
                    <span className={styles.subText}>Than last year</span>
                </div>
                
            </div>
        </div>
    );
};

export default RetailCard;
