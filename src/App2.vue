<script>
// options API
export default {
  data() {
    return {
      msg: 'Hello Vue 3 + Vite',
      status: 'active',
      tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false }
      ]
    }
  },
  methods: {
    // methods
    toggleStatus() {
      this.status = this.status === 'active' ? 'inactive' : 'active'
    }
  }
}
</script>

<template>
  <!-- interpolation -->
  <h1>{{ msg }}</h1>
  <br />
  <!-- v-if, v-else-if, v-else directives -->
  <p v-if="status === 'active'">Vue 3 is awesome!</p>
  <p v-else-if="status === 'inactive'">Vue 3 is not awesome!</p>
  <p v-else>Vue 3 is in an unknown state!</p>
  <br />
  <!-- v-for directive -->
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <input type="checkbox" :checked="task.completed" :aria-label="task.title" />
      <span>{{ task.title }}</span>
    </li>
  </ul>
  <br />
  <!-- v-on directive -->
  <!-- <button v-on:click="toggleStatus">Activate</button> -->
  <button @click="toggleStatus">Activate</button>
</template>
