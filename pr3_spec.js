describe('comparision', function () {
    
    it('one of two numbers is 50 or their sum is 50', function () {
    expect(a==50 || b==50 || a+b==50).toBe(true, 'a, b or a+b is not equal to 50');
    });
});

let a = 50;
let b = 6;
