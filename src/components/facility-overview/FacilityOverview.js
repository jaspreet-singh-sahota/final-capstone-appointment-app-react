import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './styles/facilityOverview.module.css';

const FacilityOverview = ({ setFacility }) => {
  const facilities = useSelector(state => state.facility.facilityCollection);

  return (
    <div className={styles.container}>
      {facilities.map(facility => (
        <div key={facility.id}>
          <div className={styles['image-container']} style={{ position: 'relative' }}>
            <h3 className={styles['image-title']}>{facility.name}</h3>
            <Link onClick={() => setFacility(facility)} to={`/facility/${facility.id}`}>
              <div className={styles['image-container']}>
                <img className={styles.image} alt="facility text" src={facility.image_url} />
              </div>
              <h3 className={styles.title}>{facility.name}</h3>
              <h4 className={styles.info}>{facility.brief_description}</h4>
            </Link>
            <div className={styles.icons}>
              <FaFacebookF style={{ fill: '#d1cfd0' }} className={styles.icon} />
              <FaTwitter style={{ fill: '#d1cfd0' }} className={styles.icon} />
              <FaInstagram style={{ fill: '#d1cfd0' }} className={styles.icon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FacilityOverview.propTypes = {
  setFacility: PropTypes.func.isRequired,
};

export default FacilityOverview;
