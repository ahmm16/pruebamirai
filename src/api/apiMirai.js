import { encode } from "base-64";
const BASE_URL = "https://api.mirai.com/MiraiWebService/availableRate";

const apiMirai = {
	getAvailableRate: (hotelId, checkin, nights) => {
		let username = 'user1';
		let password = 'user1Pass';
		const url = `${BASE_URL}/get?hotelId=${hotelId}&checkin=${checkin}&nights=${nights}&lang=es`
		return fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': 'Basic ' + encode(username + ":" + password),
				'Content-Type': 'application/json'
			},
		}).then(response => response.json())
			.catch(error => console.error('Error:', error))
	},
}

export default apiMirai;
