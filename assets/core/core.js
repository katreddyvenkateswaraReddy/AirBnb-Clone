// const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const API_KEYS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fef8259488msh2e4b2b66d5c6531p1da4b7jsn20b6e37c9ce5',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }