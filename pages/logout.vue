<template>
  <div>
    <form action="" @submit.prevent="login">
      <input type="text" v-model="user.email" />
      <input type="text" v-model="user.password" />
      <input type="submit" value="" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        email: 'louis.cherik@gmail.com',
        password: 'Loulou76',
      },
    }
  },
  mounted() {
    this.logout()
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  background-color: lightgray;
}
</style>
