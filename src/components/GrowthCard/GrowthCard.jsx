import styles from "./GrowthCard.module.css";
import { BsArrowUpRight, BsBoxArrowUpRight } from "react-icons/bs";
import GrowthMeter from "./GrowthMeter";
import { MdArrowOutward } from "react-icons/md";
import Maincard from "../Maincard/Maincard";

const GrowthCard = () => {
    const cards = [1, 2, 3]; // Assuming 3 cards, replace with your data

    return (
        <div
            className={styles.card_wrapper}
            style={{ "--card-count": cards.length }}
        >
            <Maincard/>
            {cards.map((_, index) => (
                <div key={index} className={styles.card}>
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
            ))}
        </div>

    );
};

export default GrowthCard;
