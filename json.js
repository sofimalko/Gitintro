let student = {
    "name" : "Sofiya",
    "surname" : "Malko",
    "rate" : 8
}
console.log(student.name);

let string = JSON.stringify(student);
console.log(string); 

student["rate"] = 10;
console.log(student["rate"]);

let randomstring = require("randomstring");
let a = randomstring.generate({
    length: 21,
    charset: 'hex'
});
console.log(a);

let b = Math.floor((Math.random() * 900000) + 100000);
console.log(b);

let fs = require('fs');
fs.open('openfile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('The file is saved!');
});

fs.appendFile('openfile.txt', 'Testing shows the presence of defects, not their absence', function (err) {
    if (err) throw err;
    console.log('The file is updated!');
  });

  fs.writeFile('openfile.txt', 'Testing can show that defects are present, but cannot prove that there are no defects.', function (err) {
    if (err) throw err;
    console.log('The file is replaced!');
  });

  fs.readFile('openfile.txt', 'utf8', function(err, data){
      if(err) throw err;
      console.log(data);
  });
