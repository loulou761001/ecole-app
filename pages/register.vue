<template>
  <div>
    <form action="" @submit.prevent="register">
      <input type="text" v-model="user.email" />
      <input type="text" v-model="user.first_name" />
      <input type="text" v-model="user.last_name" />
      <input type="text" v-model="user.password" />
      <input type="submit" value="" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  auth: false,
  data() {
    return {
      user: {
        email: 'louis.cherik@gmail.com',
        password: 'Loulou76',
        first_name: 'Louis',
        last_name: 'Cherik',
      },
    }
  },
  methods: {
    register() {
      const dataToSend = new FormData()
      dataToSend.set('email', this.user.email)
      dataToSend.set('password', this.user.password)
      dataToSend.set('first_name', this.user.first_name)
      dataToSend.set('last_name', this.user.last_name)
      this.$axios
        .post('/users/register', dataToSend)
        .then((data) => console.log(data))
        .catch((data) => console.log(data))
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  background-color: lightgray;
}
</style>
