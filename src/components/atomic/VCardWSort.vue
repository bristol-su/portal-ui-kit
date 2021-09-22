<template>
  <section class="text-gray-600 body-font">
    <div class="container flex flex-wrap px-5 py-24 mx-auto items-center md:w-1/3">
      <div class="flex flex-col md:w-1/2 md:pl-12">
        <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
        <nav class="flex flex-wrap list-none -mb-1">
          <li class="lg:w-1/3 mb-1 w-1/2" v-for="category in categories">
            <a class="hover:text-gray-800" :class="[category === selectedCategory ? 'text-blue-600' : 'text-gray-600']" @click.prevent="selectedCategory = category">{{ category }}</a>
          </li>
        </nav>
      </div>

      <div class="md:w-2/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
        <div v-for="card in cards">
            <v-card
                v-bind="card"
            ></v-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VCardWSort",
  props: {
    cards: { type: Array, required: true } // Expects Array of Objs: { ...VCard options with, category: '' }
  },
  data() {
    return {
      selectedCategory: ''
    }
  },
  computed: {
    categories() {
      // Create an empty Array:
      let categories = [];
      // Get each category from the cards:
      this.cards.forEach((card) => categories.push(card.category));
      // Remove duplicates:
      categories = [new Set(categories)];
      // Set the Starting Category for navigation
      this.selectedCategory = categories[0];
      return categories;
    },
    filteredCards() {
      return this.cards.filter((card) => card.category === this.selectedCategory);
    }
  }
}
</script>

<style scoped>

</style>