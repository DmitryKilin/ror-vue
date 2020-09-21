<template lang="pug">
  nav.navbar
    a.logo(href="#")
      img.logo__img(src="../images/vue-logo.jpg", height="80")
    span.logo__user
</template>

<script>
import axios from 'axios'
export default {
  created() {
    console.log('Navbar created')
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      axios.get('/get_user')
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
  .navbar {
    height: 90px;
    background-color: #FFD600;
    border-radius: 10px;
  }
  .logo__img {
    padding: 5px;
    border-radius: 10px;
  }
</style>