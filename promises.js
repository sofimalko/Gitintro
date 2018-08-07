console.log('step 1');
console.log('step 2');
setTimeout(() => {
    console.log ('step 3');
}, 3000)
console.log('step 4');

console.log('step 1');
console.log('step 2');

new Promise((resolve, reject) => setTimeout(() => {
    console.log ('step 3');
    resolve();
}, 3000)).then(() => {
console.log('step 4'); 
});
Promise.all([
new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then((results) => {
    console.log(results[0]);
    console.log(results[2]);
});

function login(email, pass) {
    emailInput.sendKeys (email).then(() => {
        passwordInput.sendKeys(pass).then(() => {
            loginButton.click()
        })
    });
}
async function login(email, pass) {
    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(pass);
    await loginButton.click();
}