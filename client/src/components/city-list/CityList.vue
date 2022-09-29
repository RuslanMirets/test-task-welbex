<script setup lang="ts">
import axios from 'axios';

const fetchCities = async () => {
	try {
		const response = await axios.get('http://localhost:5000/api/city');
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};
</script>

<template>
	<table>
		<tr>
			<th>Дата</th>
			<th>Название</th>
			<th>Количество</th>
			<th>Расстояние</th>
		</tr>
		<tr>
			<td>
				<button @click="fetchCities">Get cities</button>
			</td>
		</tr>
	</table>
</template>
