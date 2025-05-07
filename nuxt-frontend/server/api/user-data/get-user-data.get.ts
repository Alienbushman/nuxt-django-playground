// import HOST from "~/server/config/host";


type ApiResponse = {
	id: number;
	example_text: string;
};

export default defineEventHandler(async () => {
	try {
		const HOST = useRuntimeConfig().apiBaseUrl;
		const response = await $fetch<ApiResponse[]>(`http://${HOST}/example-api/user-text/`);

		if (Array.isArray(response)) {
			return response.map(r => r.example_text);
		} else {
			console.error('Unexpected response format:', response);
			throw createError({ statusCode: 500, statusMessage: 'Invalid API response structure' });
		}
	} catch (error) {
		console.error('Error fetching user data:', error);
		throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
	}
});

