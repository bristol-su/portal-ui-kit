<template>
  <section class="mt-3">
    <ul class="inline-flex items-center list-none pl-2">
      <div v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <li v-if="index > 0"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg></li>
        <li>
          <a :href=breadcrumb.URL class="pl-1 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black " v-text="breadcrumb.title"></a>
        </li>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  name: "VBreadcrumbs",
  props: {
    breadcrumbs: { type: Array, required: true, default: []} // Array of Objs: { title: 'Name of Page', route: 'URL as string'}
  }
}
</script>

<style scoped>

</style>