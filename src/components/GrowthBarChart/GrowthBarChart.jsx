import React from "react";
import styles from "./GrowthBarChart.module.css";
import { MdArrowOutward } from "react-icons/md";

const GrowthBarChart = () => {
    return (
        <div className={styles.chartContainer}>
            <div className={styles.header}>
                <span>Al Khobar</span>
                <div className={styles.arrow}><MdArrowOutward size={10}/></div>
            </div>
            <div className={styles.chartWrapper}>
                <div className={styles.barsContainer}>
                    <span className={styles.chartTitle}>Corporate</span>

                    <div className={styles.previousBar} style={{width:"100%"}}/>
                    <div className={styles.currentBar} style={{ width: "50%" }} />
                </div>
                <div>
                    <span className={styles.growthText}>30% growth than last year</span>
                    <p className={styles.amountText}>$120,873</p>
                </div>

            </div>


            <div className={styles.chartWrapper}>
                <div className={styles.barsContainer}>
                    <span className={styles.chartTitle}>Corporate</span>

                    <div className={styles.previousBar} style={{ width: "100%" }} />
                    <div className={styles.currentBar_orage} style={{ width: "50%" }} />
                </div>
                <div>
                    <span className={styles.growthText}>30% growth than last year</span>
                    <p className={styles.amountText}>$120,873</p>
                </div>

            </div>
        </div>
    );
};

export default GrowthBarChart;
