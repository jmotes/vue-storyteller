<template>
  <footer class="site-footer py-4 bg-dark text-white">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-6 d-flex">
          <span class="w-100 text-uppercase text-center text-md-left">© 2017 Company Name Here. All Rights Reserved.</span>
        </div>
        <div class="col-md-6 d-flex">
          <span class="w-100 text-uppercase text-center text-md-right">
            <component v-for="(item, index) in blok" :blok="item" :index="index" :is="item.component" :key="item.id"></component>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['blok']
}
</script>
