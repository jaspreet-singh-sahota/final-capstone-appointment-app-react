import request from '../axios/request';

describe('Axios request', () => {
  it('should be a Object', () => {
    expect(request).toEqual(expect.any(Object));
  });
});
