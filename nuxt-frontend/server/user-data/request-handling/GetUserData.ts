import {usePredictionStore} from "~/stores/dailyPredictionStore";

type ApiResponse = {
	id: number,
	example_text: string
}

export async function requestUserData(): Promise<string[]> {


	try {
		const response = await $fetch<ApiResponse[]>('http://127.0.0.1:8000/example-api/user-text/', {
			method: 'GET',
		})
		console.log(response)
		const listOfObjects = response as ApiResponse[]
		const exampleText = listOfObjects.map(value => value.example_text);
		return exampleText
	} catch (error) {
		console.error('Error fetching data:', error)
		return []
	}
}
