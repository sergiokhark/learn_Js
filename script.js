let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let diff = now - date;
console.log(diff / 1000);
