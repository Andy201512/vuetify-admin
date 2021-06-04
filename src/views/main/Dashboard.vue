<template>
  <div>
    <h1>Dashboard</h1>
    <p>How many is the count now?</p>
    <p>{{ count }} !</p>
    <v-btn @click="increment">click me to plus one</v-btn>
    <v-btn @click="reduction">click me to minus one</v-btn>
  </div>
</template>

<script>
export default{
  name: 'Dashboard',
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      // console.log(this.$store.state.count)
    },
    reduction() {
      this.$store.commit('reduction')
      // console.log(this.$store.state.count)
    }
  },
}
</script>

<style>
</style>
