<template>
  <div id="app">
    {{ data }}
  </div>
</template>

<script>
import Api from '@/main'

export default {
  name: 'App',

  data () {
    return {
      data: null
    }
  },

  async created () {
    this.data = await this.loadData()
    console.log(this.data)
  },

  methods: {
    async loadData () {
      const responce = await Api.get()

      return responce
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
