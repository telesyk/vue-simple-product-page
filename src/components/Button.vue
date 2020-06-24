<template>
  <button 
    class="button"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('onClick');
    }
  }
}
</script>
