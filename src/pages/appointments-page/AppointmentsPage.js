import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import AppointmentsTable from '../../components/appointments-tabel/AppointmentsTable';

const AppointmentsPage = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <>
      {currentUser ? <AppointmentsTable /> : <Redirect to="/login" />}
    </>
  );
};

export default AppointmentsPage;
