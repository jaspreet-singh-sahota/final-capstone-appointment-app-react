import React from 'react'
import LogOut from '../../components/log-out/LogOut'
import FacilityOverview from '../../components/facility-overview/FacilityOverview'

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <LogOut />
      <FacilityOverview/>
    </div>
  )
}

export default HomePage
