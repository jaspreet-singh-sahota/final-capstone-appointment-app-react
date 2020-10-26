import citiesData from '../redux/citiesData';

describe('cities Data', () => {
  it('should be a Object', () => {
    expect(citiesData).toEqual(expect.any(Array));
  });
});
