function add(x, y) {
    return x + y;
};

function deduct (x, y) {
    return x - y;
};
function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
    
}

let x=2;
let y=6;
let z=8;
let p=-4;
let m=12;
let d=0.3333333333333333;

describe('Calculator', function () {
    
    it('sum of two numbers', function () {
    expect(add(x,y)).toBe(z, 'x + y is not equal to z');
    });

    it('subtracts y from x', function () {
        expect(deduct(x,y)).toBe(p, 'x - y is not equal to p');
        });

    it('multiplies x on y', function () {
        expect(multiply(x,y)).toBe(m, 'x * y is not equal to m');
        });
    it('divides x on y', function () {
        expect(divide(x,y)).toBe(d, 'x / y is not equal to d');
        });
});

