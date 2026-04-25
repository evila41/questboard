<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()

const title = ref('')
const category = ref('School')
const priority = ref('Medium')

function submitTask() {
  if (!title.value.trim()) return

  store.addTask({
    title: title.value,
    category: category.value,
    priority: priority.value,
  })

  title.value = ''
}
</script>

<template>
  <div>
    <h2>Add Task</h2>

    <input v-model="title" placeholder="Task name" />

    <select v-model="category">
      <option>School</option>
      <option>Career</option>
      <option>Personal</option>
    </select>

    <select v-model="priority">
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>

    <button @click="submitTask">Add</button>
  </div>
</template>