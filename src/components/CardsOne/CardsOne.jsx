import React from 'react'
import style from './CardsOne.module.css'
import RetailCard from '../RetailCard/RetailCard'
import RevenueCard from '../RevenueCard/RevenueCard'
function CardsOne() {
  return (
    <div>
          <div className={style.wrapper}>
              <RetailCard />
              <RetailCard />
          </div>
          <div className={style.wrapper}>
            
              <RevenueCard />
              <RevenueCard />
              <RevenueCard />
              <RevenueCard />

          </div>
    </div>
    
  )
}

export default CardsOne