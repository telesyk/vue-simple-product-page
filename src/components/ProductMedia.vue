<template>
  <figure class="image is-1by1">
    <img 
      :src="imageSrc" 
      alt="Image"
    >
  </figure>
</template>

<script>
export default {
  name: 'ProductMedia',

  props: {
    imageSrc: {
      required: true
    }
  }

}
</script>