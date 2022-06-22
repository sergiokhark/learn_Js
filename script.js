let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
total = 0;
for (let elem of employees) {
    total += elem.salary
}
console.log(total);
