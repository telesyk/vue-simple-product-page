<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" :href="logoUrl">
        <img :src="logoSrc" width="112" height="28">
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  props: {
    logoSrc: String,
    logoUrl: String,
  },
}
</script>

<style>

</style>