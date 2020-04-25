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
  section
    .content
      each item in [1,2,3,4,5]
        .content__box
          .content__image
            if item == 3 
              .content__arnament
            if item == 4
              .content__arnament  
          .content__text 
            .content__block
              h3.content__header Lorem ipsum dolor
              p.content__desc Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              if item == 5 
                h4.content__name John Toe
                p.content__prof CEO of crios.com
  footer.footer
    .footer__content
      p.footer__subtitle Lorem ipsum dolor sit amet, consectetur adipiscing eit.
      h2.footer__title Lorem ipsum dolor sit amet
      button.footer__button push button 
    .footer__copyright 
      p 
        span.footer__icon &copy; 
        a(href="https://github.com/IvanShavliuga" target="_blank").footer__link Ivan Shavliuga (Ivanov)
        span  Republic Belarus, Novopolotsk, junior Frontend developer
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