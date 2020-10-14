import React from 'react'
import { useSelector } from 'react-redux'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './styles/facilityOverview.module.css'

const FacilityOverview = ({ setIsFacilityClicked}) => {
  const facilities = useSelector(state => state.facility.facilityCollection)

  return (
    <div className={styles.container} >
      {facilities.map((facility, idx) => <div key={idx}>
        <div style={{position: 'relative'}}>
          <h3 className={styles['image-title']}>{facility.name}</h3>
          <Link onClick={() => setIsFacilityClicked(true)} to={{ pathname: `/facility/:${idx}`, state: { facility } }} >
            <img className={styles.image} alt='facility text' src={facility.image_url} />
            <h3 className={styles.title}>{facility.name}</h3>
            <h4 className={styles.info}>{facility.brief_description}</h4>
            <div className={styles.icons}>
              <FaFacebookF style={{ fill: "#d1cfd0" }} className={styles.icon} />
              <FaTwitter style={{ fill: "#d1cfd0" }} className={styles.icon} />
              <FaInstagram style={{ fill: "#d1cfd0" }} className={styles.icon} />
            </div>
          </Link>
        </div>
      </div>
      )}
    </div>
  )
}

export default FacilityOverview
