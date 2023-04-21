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
  methods: {
    login() {
      this.$auth
        .loginWith('local', {
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        })
        .then((data) => {
          this.$auth.fetchUser()
          // this.$auth.setUser(data.data.user)
          console.log('success', data)
          this.$router.push('/')
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
  async mounted() {
    // const test = await this.$axios.get('/users')
    //
    // console.log(test)
  },
}
</script>

<style lang="scss" scoped>
input {
  background-color: lightgray;
}
</style>
