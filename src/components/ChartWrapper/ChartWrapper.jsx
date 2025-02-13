import React from 'react'
import style from './ChartWrapper.module.css'
import GwpBarChart from '../GwpBarChart/GwpBarChart'

function ChartWrapper() {
  return (
      <div className={style.wrapper}>
          <GwpBarChart/>
    </div>
  )
}

export default ChartWrapper