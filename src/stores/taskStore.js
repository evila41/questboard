import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Work on ApplyMate project',
        category: 'School',
        priority: 'High',
        done: false,
      },
      {
        id: 2,
        title: 'Finish quiz for Cyber Security class',
        category: 'School',
        priority: 'Medium',
        done: false,
      },
      {
        id: 3,
        title: 'Send emails to executives with project plan',
        category: 'Career',
        priority: 'High',
        done: false,
      },
      {
        id: 4,
        title: 'Take dog to appointment',
        category: 'Personal',
        priority: 'Low',
        done: false,
      },
    ],
  }),

  getters: {
    totalTasks: (state) => state.tasks.length,

    completedTasks: (state) =>
      state.tasks.filter(task => task.done).length,

    pendingTasks: (state) =>
      state.tasks.filter(task => !task.done).length,

    highPriorityTasks: (state) =>
      state.tasks.filter(task => task.priority === 'High'),

    completionRate: (state) => {
      if (state.tasks.length === 0) return 0
      return Math.round(
        (state.tasks.filter(task => task.done).length / state.tasks.length) * 100
      )
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