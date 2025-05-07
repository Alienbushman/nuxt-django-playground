// server/api/user-data/request-handling/submit-user-data.post.ts

export default defineEventHandler(async (event) => {
	const body = await readBody<{ example_text: string }>(event)

	try {
		const HOST = useRuntimeConfig().apiBaseUrl;
		const response = await $fetch(`http://${HOST}/example-api/user-text/`, {
			method: 'POST',
			body,
		})
		return response
	} catch (error) {
		console.error('Error submitting data to backend:', error)
		return { error: 'Submission failed' }
	}
})
