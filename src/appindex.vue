<template lang="pug">
div#appindex(data-id="appindex")
  header.header
    .header__logo 
      span c
      span r
      span i
      span o
      span s
    .header__subtitle free psd template
    h1.header__title Simple PSD template with cool stuff
    .header__desc Lorem ipsum dolor sit amet, consectetur adipiscing eit.
    button.header__button explore template
</template>
<script>

export default {
  data() {
    return {
      status:"200 OK"
    }  
  }
}
</script>
<style>
.color {
  color: #98dba0;
  font-size: 100px;
}
</style>