// import React from "react";
// import Header from "./components/Header/Header";
// import "./App.css";
// import GrowthCard from "./components/GrowthCard/GrowthCard";
// import Maincard from "./components/Maincard/Maincard";
// import GrowthProgrssChart from "./components/GrowthProgrssChart/GrowthProgrssChart";
// import CardsOne from "./components/CardsOne/CardsOne";
// import ChartWrapper from "./components/ChartWrapper/ChartWrapper";
// import { Globe } from "./components/magicui/globe";

// const App = () => {

//   return (
//     <div >
//       <div className="globe_wrapper">
//         <Globe />

//       </div>
//       <Header />
//       <div className="main_wrapper">
//         <div className="left_side">
//           <Maincard />
//           <GrowthCard />
//           <GrowthCard />
//           <GrowthCard />
//         </div>

//         <div className="right_side">
      
//           <CardsOne/>
//           <ChartWrapper />
//           <GrowthProgrssChart />

//         </div>
//       </div>


//     </div>
//   );
// };

// export default App;
import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import GrowthCard from "./components/GrowthCard/GrowthCard";
import Maincard from "./components/Maincard/Maincard";
import GrowthProgrssChart from "./components/GrowthProgrssChart/GrowthProgrssChart";
import CardsOne from "./components/CardsOne/CardsOne";
import ChartWrapper from "./components/ChartWrapper/ChartWrapper";
import { Globe } from "./components/magicui/globe copy";
// import { Globe } from "./components/magicui/globe";

const App = () => {
  return (
    <div className="app_wrapper">
      <div className="globe_background">
        <div className="globe_wrapper">
          <Globe />
        </div>
      </div>
      <div className="content_wrapper">
        <Header />
        <div className="main_wrapper">
          <div className="left_side">
            <Maincard />
            <GrowthCard />
            <GrowthCard />
            <GrowthCard />
          </div>

          <div className="right_side">
            <CardsOne />
            <ChartWrapper />
            <GrowthProgrssChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
