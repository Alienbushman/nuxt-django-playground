<script setup lang="ts">
import { ref } from 'vue'

const title = ref('SYSTEM ONLINE')
const subtitle = ref('Hello World_')
</script>

<template>
  <div class="cyber-container">
    <div class="grid-bg"></div>

    <div class="glass-card">
      <div class="neon-circle"></div>
      <h1>{{ title }}</h1>
      <p class="typewriter">{{ subtitle }}</p>

      <div class="stats">
        <div class="stat-item">
          <span class="label">STATUS</span>
          <span class="value">ACTIVE</span>
        </div>
        <div class="stat-item">
          <span class="label">UPTIME</span>
          <span class="value">99.9%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cyber-container {
  min-height: 100vh;
  background: #0f1729;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.grid-bg {
  position: absolute;
  width: 200%;
  height: 200%;
  background-image: linear-gradient(#1e293b 1px, transparent 1px),
                    linear-gradient(90deg, #1e293b 1px, transparent 1px);
  background-size: 30px 30px;
  transform: rotate(45deg);
  animation: gridMove 15s linear infinite;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  min-width: 400px;
}

.neon-circle {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #0ea5e9;
  filter: blur(80px);
  opacity: 0.5;
  top: -20px;
  right: -20px;
}

h1 {
  color: #e2e8f0;
  font-family: monospace;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
}

.typewriter {
  color: #0ea5e9;
  font-family: monospace;
  font-size: 1.5rem;
  border-right: 2px solid #0ea5e9;
  padding-right: 5px;
  animation: blink 1s step-end infinite;
}

.stats {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.label {
  display: block;
  color: #64748b;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-family: monospace;
}

.value {
  color: #0ea5e9;
  font-size: 1.2rem;
  font-family: monospace;
}

@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: #0ea5e9; }
}

@keyframes gridMove {
  0% { transform: rotate(45deg) translateY(0); }
  100% { transform: rotate(45deg) translateY(-100px); }
}

@media (max-width: 480px) {
  .glass-card {
    min-width: 300px;
    padding: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .typewriter {
    font-size: 1.2rem;
  }
}
</style>
