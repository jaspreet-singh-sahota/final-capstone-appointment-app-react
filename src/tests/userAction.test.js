import { LOG_IN, LOG_OUT } from '../redux/actions/actionType';
import logIn, { logOut } from '../redux/actions/userAction';

describe('User action', () => {
  const currentUser = 'Jaspreet';

  it('should successfully login the user', () => {
    const expectedAction = {
      type: LOG_IN,
      payload: currentUser,
    };
    expect(logIn(currentUser)).toEqual(expectedAction);
  });

  it('should successfully log out the user', () => {
    const expectedAction = {
      type: LOG_OUT,
    };
    expect(logOut()).toEqual(expectedAction);
  });
});
