let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
if (date > now) {
    console.log('Полдня еще не было');
} else {
    console.log('Полдень уже был');
}