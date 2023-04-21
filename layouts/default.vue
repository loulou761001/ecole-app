<template>
  <div class="container mx-auto">
    <div class="flex flex-row flex-wrap py-4">
      <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
        <div class="sticky top-0 p-4 w-full">
          <!-- navigation -->
          <AppSidebar />
        </div>
      </aside>
      <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import AppSidebar from '../components/Sidebar.vue'

export default {
  name: 'default',
  components: { AppSidebar },
}
</script>

<style scoped></style>
