<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div>
    <h2>Tasks</h2>

    <div v-for="task in store.tasks" :key="task.id">
      <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
        {{ task.title }} ({{ task.priority }})
      </span>

      <button @click="store.toggleTask(task.id)">
        {{ task.done ? 'Undo' : 'Done' }}
      </button>

      <button @click="store.deleteTask(task.id)">
        Delete
      </button>
    </div>
  </div>
</template>