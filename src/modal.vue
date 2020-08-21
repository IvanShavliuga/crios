<template lang="pug">
.modal
  section.modal__box
    h3.modal__title Оформление заказа
    form.modal__form
      input.modal__form__input(type="text" v-model="name")
      input.modal__form__input(type="email" v-model="email")
      ul.modal__form__list
        li.modal__form__item(v-for="(item, key) in list" :key="key" @click="selected(item.id)" :class="['modal__form__item','modal__form__'+item.icon]") 
          p.modal__form__product {{item.title}}
          p.modal__form__price {{item.price}}
            span $ 
          p.modal__form__check(v-if="selid==item.id") select
      span.modal__form__control      
        button.modal__form__button(@click="order=!order") заказать
        button.modal__form__button(@click="order=!order") отменить
        span.modal__form__select(v-if="check") {{selitem.price}}
          span $
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true    
    }  
  },
  data() {
    return {
      name: "iv2",
      email: "iva.drakon.nov@gmail.com",
      selitem: {},
      selid:-1,
      check: false    
    }  
  },
  methods: {
    selected(id) {
      this.selitem = this.list[id];
      this.selid = id;
      this.check = true;  
    }  
  }
}
</script>