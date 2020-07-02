<template>
  <div class="tab-content">
    <div class="tags are-small px-2">
      <div class="tag is-white">Colours:</div>
      <div
        v-for="(variant, index) in productVariants"
        :key="variant.id"
        :class="[{'is-active': index === productSelectedVariant}, variant.color ? variant.color : '', 'tag']"
        :data-id="index"
      >
        <i class="fas fa-tint"></i>
      </div>
    </div>
    <div class="tags are-small px-2">
      <div class="tag is-white">Sizes:</div>
      <div
        v-for="size in productSizes"
        :key="size"
        :class="'tag'"
      >
        {{ size }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabColorSize',

  props: {
    productSizes: {
      type: Array,
      required: true,
    },
    productVariants: {
      type: Array,
      required: true,
    },
    productSelectedVariant: {
      type: Number,
    },
  },
}
</script>
