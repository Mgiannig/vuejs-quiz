<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="cat in categories"
        :key="cat.name"
        :to="`/categories/${cat.name}`"
        >{{ cat.name }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>
<script>
import categories_arr from "@/data/questions";
export default {
  data() {
    return {};
  },
  computed: {
    categories() {
      return categories_arr.groups;
    },
  },
  methods: {},
};
</script>