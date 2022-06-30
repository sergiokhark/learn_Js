let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
let diff = date - now;
console.log(diff / 1000);
