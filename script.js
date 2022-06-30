let date = new Date();
let currentYear = date.getFullYear();
let result;

function visYear(year) {
    let date = new Date(year, 2, 0);
    return date.getDate() == 29;   // true если год високосный
        
}

while (!visYear(currentYear)) { // пока год не високосный
    
    result = currentYear - 1;
    currentYear--;
}

console.log(result);


