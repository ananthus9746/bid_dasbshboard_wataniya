import styles from './Timer.module.css'
import React, { useState, useEffect } from "react";
import { WiCloudy } from "react-icons/wi"; // Weather icon
import logo from "../../assets/logo.png"; // Ensure correct path
import axios from "axios";
import weather_icon from '../../assets/weather.png'
const Timer = () => {
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState({ temp: "--", description: "Loading..." });
    const fetchWeather = async (lat, lon) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f8f2604f3641c9620099c0c6a8eb50fa`
            );
            setWeather({
                temp: `${Math.round(res.data.main.temp)}°C`,
                description: res.data.weather[0].description,
            });
        } catch (error) {
            console.error("Weather fetch failed:", error);
        }
    };
    useEffect(() => {
        // Update clock every second
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeather(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.error("Location access denied:", error);
                }
            );
        }

        return () => clearInterval(timer);
    }, []);

    return (

           

            <div className={styles.container}>
                <div>
                    <div className={styles.timer}>
                        {time.toLocaleTimeString()}
                    </div>
                    <div className={styles.date}>
                        It’s {time.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                    </div>

                </div>

                <div className={styles.weather}>
                    {/* <WiCloudy className={styles.icon} size={50}/> */}
                    <img src={weather_icon} className={styles.icon} />
                    <div>
                        <span className={styles.temp}>{weather.temp}</span>
                        <p className={styles.description}>{weather.description}</p>
                    </div>

                </div>
            </div>
    );
};

export default Timer;
