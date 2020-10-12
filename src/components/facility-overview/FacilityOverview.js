import React from 'react'
import { useSelector } from 'react-redux'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FacilityOverview = () => {
  const facilities = useSelector(state => state.facility.facilityCollection)

  return (
    <div>
      {facilities.map((facility, idx) => <div key={idx}>
        <Link to={{ pathname: `/facility/:${idx}`, state: { facility } }} >
          <img alt='facility text' src={facility.image_url} />
          <h1>{facility.name}</h1>
          <h2>{facility.brief_description}</h2>
          <div>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </Link>
      </div>
      )}
    </div>
  )
}

export default FacilityOverview
