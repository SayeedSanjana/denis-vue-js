<script>
export default {
    
  props: {
   maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    // totalData: {
    //   type: Number,
    //   required: true
    // },
    // endpage:{
    //     type: Boolean || Number,
    // },
    totalData: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalData) { 
        return this.totalData - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;

    },
    endPage() {
      
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.countPages());
      
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage 
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
        // console.log(this.countPages());
      return this.currentPage === this.countPages() ;
    },
    
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.countPages());    
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    countPages() {
      return Math.ceil(this.totalData / this.perPage);
    },
  }
};
</script>

<template>
  <ul class="flex">
    <li 
      
    >
      <button class=" bg-gray-100 bg-opacity-80 mx-1 font-semibold text-xs py-1 px-3 rounded-md"
        type="button" 
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
        :class="{disabled: isInFirstPage}"
        aria-label="Go to first page"
      >
        First
      </button>
    </li>

    <li
     
    >
      <button   class=" bg-gray-100 bg-opacity-80 mx-1 font-semibold text-xs py-1 px-3 rounded-md"
        type="button" 
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        :class="{disabled: isInFirstPage}"
        aria-label="Go to previous page"
      >
        Previous
      </button>
    </li>

    <li v-for="page in pages" :key="page" >
      <button  class=" bg-gray-100 bg-opacity-80 font-semibold text-xs mx-0.5 py-1 px-3 rounded-full"
        type="button" 
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) , disabled: page.isDisabled}"
        :aria-label="`Go to page number ${page.name}`"
        
      >
        {{ page.name }}
      </button>
    </li>

    <li  >
      <button class=" bg-gray-100 bg-opacity-80 mx-1 font-semibold text-xs py-1 px-3 rounded-md"
        type="button" 
        @click="onClickNextPage"
        :disabled="isInLastPage"
        :class="{disabled: isInLastPage}"
        aria-label="Go to next page"
      >
        Next
      </button>
    </li>

    <li  >
      <button class=" bg-gray-100 bg-opacity-80 mx-1 font-semibold text-xs py-1 px-3 rounded-md"
        type="button" 
        @click="onClickLastPage"
        :disabled="isInLastPage"
        :class="{disabled: isInLastPage}"
        aria-label="Go to last page"
      >
        Last
      </button>
    </li>
  </ul>
</template>


<style scoped>
.active {
 
  @apply  bg-regal-teal bg-opacity-80 rounded-full text-white
}
.disabled {
  @apply opacity-60 cursor-not-allowed
}

</style>