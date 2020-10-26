import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookAppointmentForm from '../../components/book-appointment-form/BookAppointmentForm';
import styles from './styles/FacilityShowPage.module.css';

const FacilityShowPage = ({ facilityData }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  let facility;

  if (facilityData) {
    facility = facilityData;
  }

  return (
    <>
      {currentUser
        ? (
          <div>
            <img className={styles.image} alt="facility text" src={facility.image_url} />
            <div className={styles['info-container']}>
              <h1 className={styles.title}>{facility.name}</h1>
              <h4 className={styles['bg-grey']}>
                Free Trial
                <div className={styles.price}>{facility.free_trial}</div>
              </h4>
              <h4>
                3 Months Package
                <div className={`${styles.price} ${styles['price-margin']}`}>{facility.three_months_package}</div>
              </h4>
              <h4 className={styles['bg-grey']}>
                6 Months Package
                <div className={styles.price}>{facility.six_months_package}</div>
              </h4>
              <h4>
                Annual Package
                <div className={`${styles.price} ${styles['price-margin']}`}>{facility.annual_package}</div>
              </h4>
              <h5 className={styles.detailed_description}>{facility.detailed_description}</h5>
            </div>
            <div className={styles.button}>
              <BookAppointmentForm facilityId={facility.id} facilityName={facility.name} />
            </div>
          </div>
        )
        : <Redirect to="/login" />}
    </>
  );
};

FacilityShowPage.propTypes = {
  facilityData: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    detailed_description: PropTypes.string,
    free_trial: PropTypes.string,
    three_months_package: PropTypes.string,
    six_months_package: PropTypes.string,
    annual_package: PropTypes.string,
  }),
};

FacilityShowPage.defaultProps = {
  facilityData: [],
};

export default FacilityShowPage;
