let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 15);
if (date > now) {
    console.log('Половина месяца еще не прошла');
} else {
    console.log('Половина месяца уже прошла');
}