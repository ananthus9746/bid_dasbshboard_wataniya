import styles from "./GrowthCard.module.css";
import { BsArrowUpRight, BsBoxArrowUpRight } from "react-icons/bs";
import GrowthMeter from "./GrowthMeter";
import { MdArrowOutward } from "react-icons/md";

const GrowthCard = () => {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.title}>Al Khobar</p>
                    <div className={styles.arrow}><MdArrowOutward size={11} /></div>

                </div>
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <p className={styles.amount}>$120,873</p>
                        <p className={styles.subtitle}>30% growth than last year</p>
                    </div>
                    <GrowthMeter percentage={30} />
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.title}>Al Khobar</p>
                    <div className={styles.arrow}><MdArrowOutward size={11} /></div>

                </div>
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <p className={styles.amount}>$120,873</p>
                        <p className={styles.subtitle}>30% growth than last year</p>
                    </div>
                    <GrowthMeter percentage={30} />
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.title}>Al Khobar</p>
                    <div className={styles.arrow}><MdArrowOutward size={11} /></div>

                </div>
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <p className={styles.amount}>$120,873</p>
                        <p className={styles.subtitle}>30% growth than last year</p>
                    </div>
                    <GrowthMeter percentage={30} />
                </div>
            </div>
        </div>
    );
};

export default GrowthCard;
