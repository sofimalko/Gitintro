let cit1 = ["Budapest", "Istanbul", "Lviv"];
console.log(cit1[2]); //  l3.t1

console.log (cit1.join(" <3 ")); //  l3.t2

let num1 = [4, 4, 3, 2];
let num2 = [4, 3, 2, 1];
let results = [];

for (let i = 0; i < num1.length; i++){
    results[i] = num1[i] + num2[i];
}
console.log (results); //  l3.t3

let rectangle = {
    width:10,
    height:7,
    getArea: function() {return this.width * this.height;},
    getPerimeter: function() {return 2*this.width+2*this.height;}
};
console.log(`getArea: ${rectangle.getArea()}`);
console.log (`getPerimeter: ${rectangle.getPerimeter()}`) //  l4.t4
