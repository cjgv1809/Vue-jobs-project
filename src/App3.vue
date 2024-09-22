<script setup>
import { onMounted, ref } from 'vue'
// composition API
// reactive state
const msg = ref('Hello Vue 3 + Vite')
const status = ref('active')
const tasks = ref([
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false }
])
const newTask = ref('')

// methods
const toggleStatus = () => {
  status.value = status.value === 'active' ? 'inactive' : 'active'
}

const addTask = () => {
  if (!newTask.value) return

  tasks.value.push({
    id: tasks.value.length + 1,
    title: newTask.value,
    completed: false
  })
  newTask.value = ''
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task) => ({
      id: task.id,
      title: task.title,
      completed: task.completed
    }))
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <!-- interpolation -->
  <h1>{{ msg }}</h1>
  <br />
  <!-- v-if, v-else-if, v-else directives -->
  <p v-if="status === 'active'">Vue 3 is awesome!</p>
  <p v-else-if="status === 'inactive'">Vue 3 is not awesome!</p>
  <p v-else>Vue 3 is in unknown state!</p>
  <br />
  <!-- v-model directive -->
  <form @submit.prevent="addTask">
    <label for="msg">Enter message:</label>
    <input id="msg" type="text" v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>
  <br />
  <!-- v-for directive -->
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <input type="checkbox" :checked="task.completed" :aria-label="task.title" />
      <span>{{ task.title }}</span>
      <button type="button" aria-label="Remove task" @click="removeTask(task.id)">Remove</button>
    </li>
  </ul>
  <br />
  <!-- v-on directive -->
  <!-- <button v-on:click="toggleStatus">Activate</button> -->
  <button @click="toggleStatus">Activate</button>
</template>
