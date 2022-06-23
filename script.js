let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
        3: 'data33',
        4: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
    },
    {
		1: 'data31',
		2: 'data32',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];
for (let elem of data) {
	for (let key in elem) {
		document.write(elem[key] + '<br>');
	}
}
   