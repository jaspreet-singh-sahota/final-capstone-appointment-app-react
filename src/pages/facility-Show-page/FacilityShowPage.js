import React from 'react'
import BookAppointmentForm from '../../components/book-appointment-form/BookAppointmentForm'

const FacilityShowPage = ({ location }) => {
  const facility = location.state.facility
  
  return (
    <div>
      <img alt='facility text' src={facility.image_url} />
      <h1>{facility.name}</h1>
      <h2>{facility.detailed_description}</h2>
      <h2>Free Trial <span>{facility.free_trial}</span></h2>
      <h2>3 Months Package <span>{facility.three_months_package}</span></h2>
      <h2>6 Months Package <span>{facility.six_months_package}</span></h2>
      <h2>Annual Package <span>{facility.annual_package}</span></h2>
      <BookAppointmentForm/>
    </div>
  )
}

export default FacilityShowPage
