<template>
<div>
    <v-topbar

    ></v-topbar>
      <div class="flex-col w-full md:flex md:flex-row md:min-h-screen bg-blueGray-50">
        <v-sidenav

        >
        </v-sidenav>

        <!-- Start Content -->
        <section class="w-full">
          <v-breadcrumbs

          ></v-breadcrumbs>

          <div class="container items-center px-5 py-8 mx-auto lg:px-24 w-full">
            <section class="text-blueGray-700 align-left">
              <div class="container flex flex-col items-center px-5 py-8 mx-auto">
                <div class="flex flex-col w-full mb-12 text-left ">
                  <div class="w-full mx-auto">
                    <h1 class="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font" v-if="pageTitle" v-text="pageTitle"></h1>
                    <h2 class="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font" v-if="pageSubtitle" v-text="pageSubtitle"></h2>
                    <p class="mx-auto text-base font-medium leading-relaxed text-blueGray-700 " v-if="pageContent" v-text="pageContent"></p>
                  </div>
                </div>
              </div>
            </section>

          <slot></slot>

          </div>

        </section>
      </div>
</div>
</template>

<script>
import VTopbar from "./VTopbar";
import VSidenav from "./VSidenav";
import VBreadcrumbs from "./VBreadcrumbs";

export default {
  name: "VLayout",
  components: {VBreadcrumbs, VSidenav, VTopbar},
  props: {
    pageTitle: { type: String, required: false },
    pageSubtitle: { type: String, required: false },
    pageContent: { type: String, required: false }
  }
}
</script>

<style scoped>

</style>