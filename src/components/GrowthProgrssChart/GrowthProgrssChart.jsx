import React from 'react'
import style from './GrowthProgrssChart.module.css'
import GrowthBarChart from '../GrowthBarChart/GrowthBarChart'
function GrowthProgrssChart() {
  return (
    <div className={style.wrapper}>
          <GrowthBarChart/>
          <GrowthBarChart />
          <GrowthBarChart />

    </div>
  )
}

export default GrowthProgrssChart