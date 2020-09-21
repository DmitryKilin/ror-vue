<template lang="pug">
  #app
    p Vue App
</template>

<script>
import Staff from "./staff";

export default {
  components: {Staff},
  data: function () {
    return {
      message: "Hello Vue, yours sincerely!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: #730E15;
}

</style>
