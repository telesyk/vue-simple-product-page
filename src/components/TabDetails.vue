<template>
  <div>
    <DetailItem
      v-for="detail in productDetails"
      :key="detail"
    >
        {{ detail }}
    </DetailItem>
  </div>
</template>

<script>
import DetailItem from './DetailItem';

export default {
  name: 'TabDetails',

  components: {
    DetailItem,
  },

  props: {
    productDetails: {
      type: Array,
      required: true
    },
  },
}
</script>
