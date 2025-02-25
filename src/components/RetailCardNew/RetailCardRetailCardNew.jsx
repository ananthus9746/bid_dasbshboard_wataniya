import React from 'react';
import styles from './RetailCardNew.module.css';
import { MdArrowOutward } from "react-icons/md";

const RetailCardNew = () => {
    return (
        <div className={styles.card}>

            <div className={styles.valueContainer}>
                <p className={styles.title}>Corporate</p>
                <p className={styles.value}>$183M</p>
                <div className={styles.badge_conta}>
                    <div className={styles.growthBadge}>
                        <span>+17%</span>
                        <MdArrowOutward />
                    </div>
                    <span className={styles.subText}>Than last year</span>
                </div>
            </div>

            <div className={styles.value_container_right}>
                <div>
                    <p className={styles.name}>New</p>
                    <p className={styles.name_amount}>$120,873</p>
                </div>
                <div>
                    <p className={styles.name}>Renewal</p>
                    <p className={styles.name_amount}>$120,873</p>
                </div>
            </div>
        </div>
    );
};

export default RetailCardNew;
