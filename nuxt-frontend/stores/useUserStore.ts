import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', () => {
	const userData = ref<string[]>([])

	// Fetching user data
	async function getAllUserData() {
		try {
			const data = await $fetch<string[]>('/api/user-data/get-user-data');
			console.log('Fetched data:', data);  // Verify data structure
			userData.value = data;
		} catch (e) {
			console.error('Error fetching user data:', e);
		}
	}


	// Submitting user data
	async function submitData(data: string) {
		try {
			await $fetch('/api/user-data/submit-user-data', {
				method: 'POST',
				body: {example_text: data}
			})
		} catch (e) {
			console.error('Error submitting data:', e)
		}
	}

	return {
		userData,
		getAllUserData,
		submitData,
	}
})
