<template>
  <DetailItem
  >{{ detail }}</DetailItem>
</template>

<script>
import DetailItem from './DetailItem';
import Button from './Button';

export default {
  name: 'Details',

  components: {
    DetailItem,
    Button,
  },

  props: {
    detail: {
      type: String,
      required: true
    },
  },
}
</script>
