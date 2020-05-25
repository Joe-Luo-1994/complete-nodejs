/* eslint-disable */
// updateData
import axios from 'axios';
import { showAlert } from './alerts.js';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
	try {
		console.log(data);
		const url =
			type === 'password'
				? '/api/v1/users/updateMyPassword'
				: '/api/v1/users/updateMe';
		const res = await axios({
			method: 'PATCH',
			url,
			data,
		});
		if (res.data.status === 'success') {
			showAlert('success', `${type.toUpperCase()} updated successfully!`);
			window.setTimeout(() => {
				location.reload(true);
			}, 1000);
		}
	} catch (err) {
		showAlert('error', err.response.data.message);
	}
};
