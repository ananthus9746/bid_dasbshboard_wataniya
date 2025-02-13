import React from "react";
import Header from "./components/Header/Header";
import MainMetrics from "./components/MainMetrics/MainMetrics";
import LocationPerformance from "./components/LocationPerformance/LocationPerformance";
import CategoryBreakdown from "./components/CategoryBreakdown/CategoryBreakdown";
import "./App.css";
import GrowthCard from "./components/GrowthCard/GrowthCard";
import GrowthBarChart from "./components/GrowthBarChart/GrowthBarChart";
import Maincard from "./components/Maincard/Maincard";
import GrowthProgrssChart from "./components/GrowthProgrssChart/GrowthProgrssChart";
import CardsOne from "./components/CardsOne/CardsOne";
import GwpBarChart from "./components/GwpBarChart/GwpBarChart";
import ChartWrapper from "./components/ChartWrapper/ChartWrapper";

const App = () => {

  return (
    <div >
      <Header />
      <div className="main_wrapper">
        <div className="left_side">
          <Maincard />
          <GrowthCard />
          <GrowthCard />
          <GrowthCard />
        </div>

        <div className="right_side">
          {/* <MainMetrics />
          <LocationPerformance />
          <CategoryBreakdown />
          <Charts /> */}
          <CardsOne/>
          <ChartWrapper />
          <GrowthProgrssChart />

        </div>
      </div>


    </div>
  );
};

export default App;
