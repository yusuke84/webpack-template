import Class from '../../src/ts/class';
describe('sum()', ()=> {
    it('2 + 3 -> 5', () => {
        Class.sum(2, 3).should.equal(5);
    });
});