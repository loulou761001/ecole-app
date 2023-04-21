<template>
  <div>
    <div class="planning">
      <h1>PLANNING</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async mounted() {
    const test = await this.$axios.get('/users')

    console.log(test)
    console.log(this.$auth.user)
    console.log(this.$store.state.auth)
    console.log(this.$auth.$storage._state['_token.local'].split('Bearer ')[1])
  },
}
</script>
