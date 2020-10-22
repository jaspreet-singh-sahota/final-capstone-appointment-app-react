import { LOG_IN, LOG_OUT } from '../redux/actions/actionType';
import userReducer from '../redux/reducers/userReducer';

describe('User reducer', () => {
  const initialState = {
    isLoggedIn: false,
    currentUser: '',
  };

  it('should successfully login the user', () => {
    expect(userReducer(initialState, {
      type: LOG_IN,
      payload: 'Jaspreet',
    })).toEqual({
      ...initialState,
      isLoggedIn: true,
      currentUser: 'Jaspreet',
    });
  });

  it('should successfully log out the user', () => {
    expect(userReducer(initialState, {
      type: LOG_OUT,
    })).toEqual({
      ...initialState,
      isLoggedIn: false,
      currentUser: '',
    });
  });
});
