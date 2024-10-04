<template>
  <footer class="footer py-6 px-4">
    <div class="container">
      <nav
        class="is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="columns py-5">
            <div class="column is-7">
              <img
                src="/assets/logo_new.svg"
                class="logo mb-2"
                style="height: 40px; margin-left: -5px"
              >
              <Socials class="mb-4" />
            </div>
            <div class="column is-5">
              <div class="columns">
                <div class="column is-4">
                  <h4 class="title is-4 mb-3 has-text-white">
                    Product
                  </h4>
                  <a
                    class="navbar-item"
                    href="https://nosana.com/compute"
                    exact-active-class="is-active"
                  >
                    <div>Compute Marketplace</div>
                  </a>
                  <a
                    target="_blank"
                    href="https://explorer.nosana.io"
                    class="navbar-item"
                    exact-active-class="is-active"
                  >
                    <div>Explorer</div>
                  </a>
                </div>
                <div class="column is-4">
                  <h4 class="title is-4 mb-3 has-text-white">
                    Network
                  </h4>
                  <a
                    class="navbar-item"
                    href="https://nosana.com/team"
                    exact-active-class="is-active"
                  >
                    <div>About Nosana</div>
                  </a>
                  <a
                    target="_blank"
                    class="navbar-item"
                    href="https://nosana.com/token"
                    exact-active-class="is-active"
                  >
                    <div>$NOS Token</div>
                  </a>
                  <a
                    target="_blank"
                    href="https://explorer.nosana.io/stake"
                    class="navbar-item"
                    exact-active-class="is-active"
                  >
                    <div>Staking</div>
                  </a>
                </div>
                <div class="column is-4">
                  <h4 class="title is-4 mb-3 has-text-white">
                    Resources
                  </h4>
                  <a
                    target="_blank"
                    href="https://docs.nosana.com"
                    class="navbar-item"
                    exact-active-class="is-active"
                  >
                    <div>Docs</div>
                  </a>
                  <a
                    class="navbar-item"
                    href="https://nosana.com/blog"
                    exact-active-class="is-active"
                  >
                    <div>Blog</div>
                  </a>
                  <a
                    class="navbar-item"
                    href="https://nosana.com/support"
                    exact-active-class="is-active"
                  >
                    <div>Support</div>
                  </a>
                  <a
                    class="navbar-item"
                    href="https://nosana.com/brand"
                    exact-active-class="is-active"
                  >
                    <div>Brand Assets</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="py-4 has-radius">
        <small class="is-size-7 has-text-white">© Nosana Network 2024 The Nosana Network Authors Documentation
          Distributed under CC BY 4.0</small>
      </div>
    </div>
  </footer>
</template>
<script>
import Socials from './Socials.vue';

export default {
  components: { Socials }
}
</script>

<style lang="scss" scoped>

.footer {
  z-index: 100;
  background-color: black;
  .navbar-menu {
    background-color: black;
  }
  a {
    font-weight: 400;
  }
  .navbar-item {
    color: white;
    padding: 4px 0px;
    &:hover {
      background: transparent;
    }
    &.is-active {
      background: transparent !important;
    }
  }
}
.footer {
  .navbar-menu {
    display: flex !important;
  }
  border-top: 1px solid rgba(#10E80C, 0.1);
}
</style>
