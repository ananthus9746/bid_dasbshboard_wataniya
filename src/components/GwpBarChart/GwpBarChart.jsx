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
                        {/* Stripe pattern definition */}
                        <pattern id="stripePattern" patternUnits="userSpaceOnUse" width="8" height="8">
                            <rect width="8" height="8" fill="#00A8E1" />
                            <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                        </pattern>

                        <pattern id="juneStripePattern" patternUnits="userSpaceOnUse" width="8" height="8">
                            <rect width="8" height="8" fill="#FF7F50" />
                            <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="white" strokeWidth="0.5" />
                        </pattern>

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
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={`url(#${entry.month === 'Jun' ? 'juneStripePattern' : 'stripePattern'})`}
                                fillOpacity={1}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GwpBarChart;
