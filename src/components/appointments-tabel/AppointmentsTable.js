import React, { useEffect } from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import request from '../../axios/request';
import fetchAppointments from '../../redux/actions/appointment-action/appointmentAction';
import styles from './styles/appointments.module.css';

const AppointmentsTable = () => {
  const appointments = useSelector(state => state.appointment.appointments);
  const facilities = useSelector(state => state.facility.facilityCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(request.getAppointment, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          dispatch(fetchAppointments(response.data));
        }
      })
      .catch(error => {
        fetchAppointments(error);
      });
  }, []);

  const facilityName = id => {
    const facility = facilities.filter(facility => facility.id === id);
    let facilityName;

    if (facility[0]) {
      facilityName = facility[0].name;
    }

    return facilityName;
  };

  return (
    <div className={styles.container}>
      {!appointments.length ? <h1 className={styles['text-message']}>You have no appointments</h1>
        : (
          <div>
            <div className={styles['info-container']}>
              <div className={styles['flex-container']}>
                <h2 className={styles['facility-name']}>FACILITY NAME</h2>
                <h2 className={styles['city-name']}>CITY</h2>
                <h2 className={styles['date-title']}>DATE</h2>
              </div>
              <div className={styles['table-container']}>
                {appointments.map(appointment => (
                  <div className={styles.table} key={appointment.id}>
                    <h3 className={styles.facility}>{facilityName(appointment.facility_id)}</h3>
                    <h3 className={styles.city}>{appointment.city}</h3>
                    <h3 className={styles.date}>{appointment.date}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default AppointmentsTable;
