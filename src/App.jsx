import React from "react";
import Header from "./components/Header/Header";
import GrowthCard from "./components/GrowthCard/GrowthCard";
import Maincard from "./components/Maincard/Maincard";
import GrowthProgrssChart from "./components/GrowthProgrssChart/GrowthProgrssChart";
import CardsOne from "./components/CardsOne/CardsOne";
import ChartWrapper from "./components/ChartWrapper/ChartWrapper";
import GlobeDemo from "./components/elements/Globe";
import "./App.css";

const App = () => {
  return (
    <div className='wrapper'>
      {/* <div className='globe_background'>
        <GlobeDemo />
      </div> */}

      <Header />

      <div className="main_wrapper">
        <div className="left_side">
          {/* <Maincard /> */}
          <GrowthCard />
        
        </div>

        <div className="right_side">
          <CardsOne />
          <ChartWrapper />
          <GrowthProgrssChart />
        </div>
      </div>
    </div>
  );
};

export default App;
