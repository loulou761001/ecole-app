<template>
  <ul
    class="flex flex-col overflow-hidden"
    v-if="$route.path.includes('gestion')"
  >
    <li v-for="classItem in classes" :key="classItem._id">
      {{ classItem.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppSidebar',
  fetch() {
    console.log(this.$route.path)
    this.$axios
      .get('classes/byProf/' + this.$auth.user.id)
      .then((data) => {
        console.log(data)
        if (data.data) {
          this.classes = data.data
        }
      })
      .catch((e) => console.log(e))
  },
  data() {
    return {
      classes: [],
    }
  },
}
</script>

<style scoped></style>
