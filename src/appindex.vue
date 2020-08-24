<template lang="pug">
div#appindex(data-id="appindex")
  modal(v-show="order" :list="pricelist")
  header.header(v-show="!order")
    .header__logo 
      each item in ['c','r','i','o','s']
        span(data-id=item)=item
    .header__subtitle Семейный отдых
    h1.header__title Лучшая отечественная туристическая база
    .header__desc Отдых для всей семьи в лучших белорусских традициях
    button.header__button(@click="order=!order")  заказать
  section(v-show="!order")
    .container
      .menu
        p.menu__subtitle Мы предлагаем вам экслюзивный отдых
        h2.menu__title Только у нас самые лучшие цены
        ul.menu__list
          li.menu__item(v-for="(item, key) in query.pricelist" :key="key" @click="item.select=!item.select" :class="['menu__item','menu__item__'+item.icon]")
            h3.menu__price {{item.price}}  
              span $
            p(:class="(item.select)?('menu__item__select'):('menu__item__none')") check           
            h4.menu__element {{item.title}}
            p.menu__desc {{item.desc}}           
        button.menu__button(@click="order=!order")  заказать
  section(v-show="!order")
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
              if item == 1
                h3.content__header Наш собственный парк
              if item == 1
                p.content__desc Освежающие и успокаивающие прогулки по нашему парку устронят любое чувство тревоги и вылечат любую дипрессию.
              if item == 2
                h3.content__header Наши деревенские дома
              if item == 2
                p.content__desc Деревенские дома построенные в лучших белорусских традициях помогут почувствовать единство со своими предками
              if item == 3
                h3.content__header Музыка и фильмы
              if item == 3
                p.content__desc Всеми любимые музыкальные треки и клипы, а так же различные позитивные фильмы, доступные в том числе в офлайн режиме 
              if item == 4
                h3.content__header Общение с друзьями
              if item == 4
                p.content__desc Полный доступ к социальным сетям и мессенджерам, а также высокоскоростной интернет в полном объеме  
              if item == 5 
                h4.content__name Константин Вавилов
                p.content__prof CEO of crios.com
  footer.footer(v-show="!order")
    .footer__content
      p.footer__subtitle Праздничные мероприятия на любой вкус в лучших луховных традициях
      h2.footer__title CRIOS - лучший семейный отдых
      button.footer__button(@click="order=!order") Заказать 
    .footer__copyright 
      p 
        span.footer__icon &copy; 
        a(href="https://github.com/IvanShavliuga" target="_blank").footer__link Ivan Shavliuga (Ivanov)
        span  Republic Belarus, Novopolotsk, junior Frontend developer
</template>
<script>
import modal from './modal.vue';
export default {
  props: {
    query: {
      type: Object,
      default: {
        status: "404"    
      }
    }  
  },
  data() {
    return {
      status:"200 OK",
      order:false,
      pricelist: [{
        id:0,
        title: "Лекции",
        desc: "Научные форумы",
        price: 250,
        icon: "lection",
        select: false      
      },{
        id:1,
        title: "Спорт",
        desc: "Спортивные соревнования",
        price: 200,
        icon: "sport",
        select: false      
      },{
        id:2,
        title: "Медовый месяц",
        desc: "Семейные праздники",
        price: 230,
        icon: "family",
        select: false
      },{
        id:3,
        title: "Фестивали",
        desc: "Культурные мероприятия",
        price: 270,
        icon: "fest",
        select: false      
      }]
    }  
  },
  components: {
    modal  
  },
  methods: {
    orderclick() {
      this.order = !this.order;    
    },
  }
}
</script>
<style>
.color {
  color: #98dba0;
  font-size: 100px;
}
</style>