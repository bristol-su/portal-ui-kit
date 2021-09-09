<template>
  <section class="flex flex-col items-center h-screen md:flex-row" :class="[bg ? 'bg-' + bg : '']">
    <div class="container mx-auto">
      <div class="flex justify-center px-2 py-6 ">
        <div class="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl">
          <div class="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
            <div class="relative z-10 m-12 text-left ">
              <a class="flex items-center">
                <img :src="logo" alt="Bristol Students' Union Logo - Blue">
              </a>
              <h1 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> {{ title }} </h1>
              <div class="w-full mt-16 mb-8 text-base leading-relaxed text-blueGray-900 sm:md:w-3/3 lg:text-1xl " v-if="subtext"> {{ subtext }} </div>
            </div>
          </div>
          <div class="w-full h-full sm:px-2 sm:py-5 px-8 py-24 bg-white rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none flex flex-wrap content-center">
            <div class="xs:block lg:hidden">
              <div class="relative z-10 m-12 text-left ">
                <a class="flex items-center">
                  <img :src="logo" alt="Bristol Students' Union Logo - Blue">
                </a>
                <h1 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> {{ title }} </h1>
                <div class="w-full mt-16 mb-8 text-base leading-relaxed text-blueGray-900 sm:md:w-3/3 lg:text-1xl " v-if="subtext"> {{ subtext }} </div>
              </div>
            </div>
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
    logo: { type: String, required: true },
    title: { type: String, required: true },
    subtext: { type: String, required: false },
    bg: { type: String, required: false }
  }
}
</script>

<style scoped>

</style>
