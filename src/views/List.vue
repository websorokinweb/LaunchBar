<template>
  <list-cover></list-cover>
  <!-- <list-filters></list-filters> -->
  <list-items></list-items>
</template>

<script>
import ListCover from '@/components/List/ListCover.vue';
// import ListFilters from '@/components/List/ListFilters.vue';
import ListItems from '@/components/List/ListItems.vue';

export default {
  components: {
    ListCover,
    // ListFilters,
    ListItems,
  },
}
</script>
