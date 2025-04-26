<script setup lang="ts">
import { ref, onMounted } from 'vue'

const userStore = useUserStore()
const newUserData = ref('')

onMounted(async () => {
  await userStore.getAllUserData()
})

const submitData = async () => {
  try {
    await userStore.submitData(newUserData.value)
    await userStore.getAllUserData()
    newUserData.value = ''
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h2 class="text-h4 mb-6">User Data Form</h2>

        <v-form @submit.prevent="submitData">
          <v-text-field
            v-model="newUserData"
            label="Enter user data"
            required
          ></v-text-field>

          <v-btn
            color="primary"
            type="submit"
            block
          >
            Submit
          </v-btn>
        </v-form>

        <v-card
          v-if="userStore.userData.length"
          class="mt-4"
        >
          <v-list>
            <v-list-item
              v-for="(data, index) in userStore.userData"
              :key="index"
              :title="data"
            ></v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h2 {
	font-family: monospace;
	font-size: 2rem;
	margin-bottom: 1rem;
}
</style>
