<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskSummary from './components/TaskSummary.vue'
</script>

<template>
  <div>
    <h1>QuestBoard</h1>

    <TaskForm />
    <TaskSummary />
    <TaskList />
  </div>
</template>