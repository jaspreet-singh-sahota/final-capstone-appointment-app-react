import { LOG_IN, LOG_OUT } from './actionType';

const logIn = user => ({
  type: LOG_IN,
  payload: user,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export default logIn;
