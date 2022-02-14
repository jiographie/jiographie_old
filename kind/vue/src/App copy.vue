<template>
    <headerComponent></headerComponent>
    <GlobalComponent></GlobalComponent>
    <p>app.vue</p>
    <footerComponent></footerComponent>
</template>

<script>
import GlobalComponent from './components/global-component.vue'
import headerComponent from './components/header.vue'
import footerComponent from './components/footer.vue'
  export default {
    name: 'globalComponent',
    components: {GlobalComponent, headerComponent, footerComponent}
  }
</script>
