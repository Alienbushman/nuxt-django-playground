export async function submitUserData(data: string): Promise<any> {

	const payload = {
		example_text: data,
	}
	console.log(payload)
	try {
		const response = await $fetch('http://127.0.0.1:8000/example-api/user-text/', {
			method: 'POST',
			body: payload,
		})
		console.log(response)
		return response
	} catch (error) {
		console.error('Error fetching data:', error)
		return []
	}
}