import React from 'react'
import style from './CardsOne.module.css'
import RetailCard from '../RetailCard/RetailCard'
import RevenueCard from '../RevenueCard/RevenueCard'
import Timer from '../Timer/Timer'
import RetailCardNew from '../RetailCardNew/RetailCardRetailCardNew'
function CardsOne() {
  return (
    <div>
      <Timer />


      <div className={style.wrapper}>

        <RetailCardNew />
        <RetailCardNew />
        {/* <RetailCard /> */}
      </div>
      <div className={style.wrapper}>
        {/*             
              <RevenueCard />
              <RevenueCard />
              <RevenueCard />
              <RevenueCard /> */}

      </div>
    </div>

  )
}

export default CardsOne