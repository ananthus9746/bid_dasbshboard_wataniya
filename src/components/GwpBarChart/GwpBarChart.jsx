import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell,
} from 'recharts';
import styles from './GwpBarChart.module.css';

const data = [
    { month: 'Jan', current: 15000, previous: 19000 },
    { month: 'Feb', current: 10000, previous: 14000 },
    { month: 'Mar', current: 30000, previous: 45000 },
    { month: 'Apr', current: 12000, previous: 27000 },
    { month: 'May', current: 40000, previous: 45000 },
    { month: 'Jun', current: 72000, previous: 80000 },
    { month: 'Jul', current: 0, previous: 90000 },
    { month: 'Aug', current: 0, previous: 75000 },
    { month: 'Sep', current: 0, previous: 90000 },
    { month: 'Oct', current: 0, previous: 60000 },
    { month: 'Nov', current: 0, previous: 30000 },
    { month: 'Dec', current: 0, previous: 50000 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p className={styles.tooltipText}>{label}</p>
                <p className={styles.tooltipAmount}>${payload[0].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};

const GwpBarChart = () => {
    return (
        <div className={styles.container_chart}>
            <div className={styles.content}>
                <h3 className={styles.title}>Average GWP</h3>
                <span className={styles.year}>This year</span>
                <p className={styles.amount}>
                    $873,421.39 <span className={styles.subText}>$12,34,556 More than last year</span>
                </p>
            </div>

            <ResponsiveContainer width="100%" height={160} className={styles.chart_contain}>
                <BarChart data={data} barGap={-28}>
                    <defs>
                        <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00A8E1" />
                            <stop offset="100%" stopColor="#0077B6" />
                        </linearGradient>
                        <linearGradient id="juneGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF7F50" />
                            <stop offset="100%" stopColor="#FF4500" />
                        </linearGradient>
                        <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="6" height="6">
                            <path d="M 0 0 L 6 6 M -1 5 L 1 7 M 5 -1 L 7 1" stroke="#ffffff" strokeWidth="1" />
                        </pattern>
                        <mask id="barMaskPattern">
                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalLines)" />
                        </mask>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                    <XAxis
                        dataKey="month"
                        tick={{ fill: '#B0B0B0', fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tickFormatter={(value) => `$${value / 1000}k`}
                        tick={{ fill: '#B0B0B0', fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

                    <Bar dataKey="previous" fill="#E9ECF0" barSize={28} radius={[5, 5, 0, 0]} />

                    <Bar dataKey="current" barSize={28} radius={[5, 5, 0, 0]}>
                        {data.map((entry, index) => {
                            const baseFill = entry.month === 'Jun' ? 'juneGradient' : 'currentGradient';
                            return (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={`url(#${baseFill})`}
                                    mask={entry.current > 0 ? 'url(#barMaskPattern)' : ''}
                                />
                            );
                        })}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GwpBarChart;
