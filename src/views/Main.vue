<template>
  <div>
  <!-- 
    в хэдер сделал padding, цвет текста и решил скопировать цвет вашего сайта
    дальше выровнял блок div, сделал ссылку для лого и выровнял его классами 
    ниже решил добавить логотип вашего сайта
    не знаю можно ли использовать ваш лого, но если что удалю)
  -->
 <header class="p-4 text-white shadow" style="background-color: #155FB4">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="https://stc-spb.ru/local/templates/stc/img/header/header_logo.svg" alt="логотип">
        </a>
  <!-- Тут менюшка максимально простая -->
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-3 text-white"> Главная</a></li>
          <li><a href="#" class="nav-link px-3 text-white">О нас</a></li>
          <li><a href="#" class="nav-link px-3 text-white">Услуги</a></li>
        </ul>
  <!-- На странице авторизации отключил кнопку Кабинета -->
          <button @click="showModal" type="button" class="btn btn-outline-light me-3" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> Кабинет</button>
        </div>
      </div>
      <my-modal v-model:show="modalVisible">
        <user-cabinet />
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button @click="hideButt" class="btn btn-outline-primary btn-sm" type="button">Закрыть</button>
        </div>
      </my-modal>
    </header>

<main>

<!-- Создал страницы с помощью vue router -->
  
  <form class="d-grid gap-2 col-6 mx-auto justify-content-center">
    <router-link to="/login" type="button" class="btn btn-primary mt-5 shadow-sm">Авторизация</router-link>
      <hr>
    <div id="emailHelp" class="form-text">Вы еще не зарегистрированы?</div>
    <router-link to="/register" type="button" class="btn btn-outline-primary mb-5 shadow-sm">Регистрация</router-link>
  </form>
    </main>
  </div>
</template>

<script>
import UserCabinet from '../components/UserCabinet.vue'
import MyModal from '../components/MyModal.vue';

export default {
  components: {
    MyModal, UserCabinet
  },
  data() {
    return { 
      modalVisible: false,
    }
  },
  methods: {
    showModal()  {
      this.modalVisible = true
    },
    hideButt() {
      this.modalVisible = false
    }
  },
}

</script>

<style>
</style>