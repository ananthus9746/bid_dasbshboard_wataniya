import styles from "./GrowthMeter.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import GaugeChart from "react-gauge-chart";

const GrowthMeter = ({ percentage }) => {
    return (
        <div className={styles.meterContainer}>
            <GaugeChart
                animate
                id="gauge-chart"
                nrOfLevels={15}
                percent={percentage / 100}
                colors={["#EA4228", "#EAEAEA"]} // Red for filled, Light Gray for unfilled
                arcWidth={0.3}
                needleBaseColor="transparent"
                hideText
                needleColor="transparent" // Hides the needle
            />
            <div className={styles.percentageContainer}>
                <span className={styles.percentageText}>{percentage}%</span>
                <BsArrowUpRight className={styles.arrowIcon} />
            </div>
        </div>
    );
};

export default GrowthMeter;
