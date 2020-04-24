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
  section
    .container
      .menu
        p.menu__subtitle Lorem ipsum dolor sit amet, consectetur adipiscing eit.
        h2.menu__title Lorem ipsum dolor sit amet
        ul.menu__list
          each item in ["home","codes","lections","about us"]
            li.menu__item
              h3.menu__element=item
              p.menu__desc Lorem ipsum dolor sit ame  
              p.menu__desc Lorem ipsum dolor sit amet
        button.menu__button check our offer
</template>
<script>

export default {
  data() {
    return {
      status:"200 OK",
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