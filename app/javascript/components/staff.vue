<template lang="pug">
  .container
    navbar
</template>

<script>
import Navbar from './navbar'

export default {
  components: {Navbar},
  data: function () {
    return {
      message: "Hey Staff!!! Yours sincerely, Vue!"
    }
  }
}
</script>

<style scoped>
.container {
  width: 1224px;
  margin: 0 auto;
  background-color: #fff;
  color: #000
}
</style>
