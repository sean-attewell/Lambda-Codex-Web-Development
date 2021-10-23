const {hello, variable} = require('./app') 
//arrange
describe("hello", () => {
  //act
  it("should return hello world!", () => {
    //assert
    expect(hello()).toBe("hello world!");
  });
});

describe("saved variable", () => {
  //act
  it("should be 24!", () => {
    //assert
    expect(variable).toBe(24);
  });
});