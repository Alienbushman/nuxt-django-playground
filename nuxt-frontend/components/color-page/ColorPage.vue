<script setup lang="ts">

</script>

<template>
  <v-app>
    <!-- Main Content Container -->
    <v-container class="pa-5">
      <v-row>
        <!-- Left Column: Information -->
        <v-col cols="12" md="6">
          <v-card class="bg-background mx-auto">
            <v-card-title class="text-h5">Welcome to Vuetify Theming Showcase</v-card-title>
            <v-card-subtitle class="mb-4">Explore the different Vuetify theme configurations and colors.</v-card-subtitle>
            <v-btn color="primary" class="ma-2">Primary Button</v-btn>
            <v-btn color="secondary" class="ma-2">Secondary Button</v-btn>

            <div >
              <v-chip class="ma-2" color="success" text-color="white">Success Chip</v-chip>
              <v-chip class="ma-auto" color="error" text-color="white">Error Chip</v-chip>
            </div>
          </v-card>
        </v-col>

        <!-- Right Column: Theme Demonstration -->
        <v-col cols="12" md="6">
          <v-card class="bg-background mx-auto">
            <v-card-title class="text-h5">Theming Preview</v-card-title>
            <v-card-subtitle>
              Here's how some built-in colors look:
            </v-card-subtitle>

            <v-row class="ma-auto">
              <v-col cols="4">
                <v-card class="pa-5 bg-primary white--text">
                  <div class="text-center">Primary Color</div>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card class="pa-5 bg-info white--text">
                  <div class="text-center">Info Color</div>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card class="pa-5 bg-warning white--text">
                  <div class="text-center">Warning Color</div>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="ma-auto">
              <v-col cols="4">
                <v-card class="pa-5 bg-success white--text">
                  <div class="text-center">Success Color</div>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card class="pa-5 bg-error white--text">
                  <div class="text-center">Error Color</div>
                </v-card>
              </v-col>

              <v-col cols="4">
                <v-card class="pa-5 bg-accent white--text">
                  <div class="text-center">Accent Color</div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


  </v-app>
</template>

<style scoped>

</style>