import {defineStore} from "pinia";
import {requestUserData} from "~/server/user-data/request-handling/GetUserData";
import {submitUserData} from "~/server/user-data/request-handling/SubmitUserData";

export const useUserStore = defineStore('user', () => {
	const userData = ref<string[]>([])

	async function getAllUserData() {
		try {
			userData.value = await requestUserData()
		} catch (e) {
		}
	}

	async function submitData(data: string) {
		try {
			await submitUserData(data)
		} catch (e) {
		}
	}

	return {
		userData,
		getAllUserData,
		submitData,
	}
})