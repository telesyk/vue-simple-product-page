<template>
  <nav class="navbar level" role="navigation" aria-label="main navigation">
    <div class="navbar-brand level-left">
      <a class="navbar-item" :href="logoUrl">
        <img :src="logoSrc" width="112" height="28">
      </a>
    </div>
    <div class="level-right">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-light">
              Cart ({{cartCount}})
            </button>
          </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  props: {
    logoSrc: String,
    logoUrl: String,
    cartCount: Number,
  },
}
</script>
