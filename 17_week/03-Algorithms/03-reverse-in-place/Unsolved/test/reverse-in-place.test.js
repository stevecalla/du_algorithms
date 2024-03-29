const expect = chai.expect;

before(() => {
  sinon.spy(Array.prototype, 'reverse');
});

describe('reverseInPlace', () => {
  it("should reverse an array in place without using the built-in 'reverse' method", () => {
    const arr = [1, 2, 3, 4, 5];
    const reversed = JSON.parse(JSON.stringify(arr)).reverse();
    const result = reverseInPlace(arr);
    // console.log(expect(result).to.equal(arr));
    // expect(result).to.eql(reversed);
    // expect(result).to.eql([ 5, 4, 3, 2, 1 ]);
    expect(arr).to.eql([5, 4, 3, 2, 1]);
    // expect(Array.prototype.reverse.calledOnce).to.eql(true);
  });
});
