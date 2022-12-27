xdescribe('testOne', () => {

  it('returns test succeeding', () => {
    let returnedValue = testOne('test succeeding');
    expect(returnedValue).toEqual('test succeeding');
  });

});


xdescribe('testTwo', () => {

  it('returns test succeeding', () => {
    let returnedValue = testTwo();
    expect(returnedValue).toEqual('test succeeding');
  });

});


xdescribe('testThree', () => {

  it('returns test succeeding', () => {
    let returnedValue = testThree(true);
    expect(returnedValue).toEqual('test succeeding');
  });

});


xdescribe('testFour', () => {

  it('returns test succeeding', () => {
    let returnedValue = testFour('test failing');
    expect(returnedValue).toEqual('test succeeding');
  });

});

