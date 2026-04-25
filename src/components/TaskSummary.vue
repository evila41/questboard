<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div>
    <h2>Summary</h2>

    <p>Total Tasks: {{ store.totalTasks }}</p>
    <p>Completed: {{ store.completedTasks }}</p>
    <p>Pending: {{ store.pendingTasks }}</p>
    <p>Completion Rate: {{ store.completionRate }}%</p>

    <h3>High Priority Tasks</h3>
    <ul>
      <li v-for="task in store.highPriorityTasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>