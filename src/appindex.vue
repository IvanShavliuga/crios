<template lang="pug">
div#appindex(data-id="appindex")
  header.header
    .header__logo 
      each item in ['c','r','i','o','s']
        span(data-id=item)=item
    .header__subtitle Семейный отдых
    h1.header__title Лучшая отечественная туристическая база
    .header__desc Отдых для всей семьи в лучших белорусских традициях
    button.header__button заказать билет
  section
    .container
      .menu
        p.menu__subtitle Lorem ipsum dolor sit amet, consectetur adipiscing eit.
        h2.menu__title Lorem ipsum dolor sit amet
        ul.menu__list
          li.menu__item(v-for="(item, key) in pricelist" :key="key" @click="item.select=!item.select" :class="['menu__item','menu__item__'+item.icon]")
            h3.menu__price {{item.price}}  
              span $
            p(:class="(item.select)?('menu__item__select'):('menu__item__none')") check           
            h4.menu__element {{item.title}}
            p.menu__desc {{item.desc}}           
        button.menu__button заказать
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
      pricelist: [{
        title: "Лекции",
        desc: "Научные форумы",
        price: 250,
        icon: "lection",
        select: false      
      },{
        title: "Спорт",
        desc: "Спортивные соревнования",
        price: 200,
        icon: "sport",
        select: false      
      },{
        title: "Медовый месяц",
        desc: "Семейные праздники",
        price: 230,
        icon: "family",
        select: false
      },{
        title: "Фестивали",
        desc: "Культурные мероприятия",
        price: 270,
        icon: "fest",
        select: false      
      }]
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