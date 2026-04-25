import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Finish web design homework',
        category: 'School',
        priority: 'High',
        done: false,
      },
      {
        id: 2,
        title: 'Apply to internship',
        category: 'Career',
        priority: 'Medium',
        done: true,
      },
      {
        id: 3,
        title: 'Update portfolio ideas',
        category: 'Personal',
        priority: 'Low',
        done: false,
      },
    ],
  }),

  getters: {
    totalTasks: (state) => state.tasks.length,
    completedTasks: (state) => state.tasks.filter(task => task.done).length,
    pendingTasks: (state) => state.tasks.filter(task => !task.done).length,
    highPriorityTasks: (state) => state.tasks.filter(task => task.priority === 'High'),
    completionRate: (state) => {
      if (state.tasks.length === 0) return 0
      return Math.round((state.tasks.filter(task => task.done).length / state.tasks.length) * 100)
    }
  },

  actions: {
    addTask(newTask) {
      this.tasks.push({
        id: Date.now(),
        title: newTask.title,
        category: newTask.category,
        priority: newTask.priority,
        done: false,
      })
    },

    toggleTask(id) {
      const task = this.tasks.find(task => task.id === id)
      if (task) {
        task.done = !task.done
      }
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
})