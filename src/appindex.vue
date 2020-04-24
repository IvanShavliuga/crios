<template lang="pug">
div#appindex(data-id="appindex")
  h1.color {{status}}
  p.msg {{message}}
</template>
<script>

export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      status:"200 OK"
    }  
  }
}
</script>
<style>
.color {
  color: green;
  font-size: 100px;
}
</style>