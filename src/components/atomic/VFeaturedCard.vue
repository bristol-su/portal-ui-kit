<template>
  <section class="flex flex-col items-center h-screen md:flex-row" :class="[bg ? 'bg-' + bg : '']">
    <div class="container mx-auto">
      <div class="flex justify-center px-2 py-6 ">
        <div class="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl">
          <div class="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
            <div class="relative z-10 m-12 text-left ">
              <a class="flex items-center w-32 mb-4 font-medium text-blueGray-900 title-font md:mb-10">
                <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600">
                </div>
                <h2 class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400"> Portal/Bristol Logo </h2>
              </a>
              <h2 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> {{ title }} </h2>
              <div class="w-full mt-16 mb-8 text-base leading-relaxed text-blueGray-900 sm:md:w-3/3 lg:text-1xl " v-if="subtext"> {{ subtext }} </div>
            </div>
          </div>
          <div class="w-full h-full px-8 py-24 bg-white rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none flex flex-wrap content-center">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VFeaturedCard",
  props: {
    title: { type: String, required: true },
    subtext: { type: String, required: false },
    bg: { type: String, required: false }
  }
}
</script>

<style scoped>

</style>