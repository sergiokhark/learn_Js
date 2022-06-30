let now = new Date();
let date = new Date(now.getFullYear() + 1, 0, 1);
let diff = date - now;
console.log(diff / (1000 * 60 * 60 * 24));
