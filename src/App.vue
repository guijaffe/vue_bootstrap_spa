<template>

  <!-- 
    в хэдер сделал padding, цвет текста и решил скопировать цвет вашего сайта
    дальше выровнял блок div, сделал ссылку для лого и выровнял его классами 
    ниже решил добавить логотип вашего сайта
    не знаю можно ли использовать ваш лого, но если что удалю)
  -->

 <header class="p-3 text-white" style="background-color: #155FB4">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="https://stc-spb.ru/local/templates/stc/img/header/header_logo.svg" alt="">
        </a>

  <!-- Тут менюшка максимально простая -->

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-3 text-white"> Главная</a></li>
          <li><a href="#" class="nav-link px-3 text-white">О нас</a></li>
          <li><a href="#" class="nav-link px-3 text-white">Услуги</a></li>
        </ul>
        
  <!-- Здесь Кабинет с svg -->

        <div @click="openPopupTwo" class="text-end">
          <button type="button" class="btn btn-outline-light me-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> Кабинет</button>
        </div>
      </div>
    </div>
  </header>

  <!-- Здесь форма авторизации с bootstrap стилями -->

<main>
  <form class="col-sm-6 mt-4 mx-auto px-4">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
    </div>
      <button type="submit" class="mb-2 btn btn-primary">Войти</button>

    <div class="d-grid gap-2 col-6 mx-auto justify-content-center">
      <div id="emailHelp" class="form-text">Вы еще не зарегистрированы?</div>
  <button class="btn btn-outline-primary mb-4" type="button" @click="openPopup">Регистрация</button>
</div>
  </form>
    </main>

  <!-- 
    Здесь сделал модальное окно с регистрацией
    когда доходишь до конца и нажимаешь кнопку "Зарегистрироваться" в консоль выводится "Вы успешно зарегистрированы"

    Вывод модального окна делал без Bootstrap, так вышло чуть удобнее для меня, потому что реализовывал компонентный vue подход)

    Так же реализовал шаги регистрации, страницы переключаются при помощи class step, и методов nextStep, backStep
  -->

<Popup
  :is-open="isPopupOpen"
  @close="isPopupOpen = false">
    <template #actions="{ confirm }">
      <form @submit.prevent="registerUser">
        <div v-show="step === 1" class="step">
  <div class="mb-3">
    <label for="name" class="form-label">Ваше имя</label>
    <input type="text" class="form-control" id="name">
  </div>
  <div class="mb-3">
    <label for="surname" class="form-label">Ваша фамилия</label>
    <input type="text" class="form-control" id="surname">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="text" class="form-control" id="email">
  </div>
  <button @click="nextStep" type="button" class="btn btn-primary"> Следующий шаг</button>
  </div>

  <div v-show="step === 2" class="step">
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="password">
  </div>
  <div class="mb-3">
    <label for="passwordConfirm" class="form-label">Подтверждение пароля</label>
    <input type="password" class="form-control" id="password">
  </div>
    <button @click="backStep" type="button" class="btn btn-light"> Назад</button>
    <button @click="nextStep" type="button" class="btn btn-primary"> Следующий шаг</button>
  </div>

<div v-show="step === 3" class="step">
  <div class="mb-3">
    <label for="country" class="form-label">Страна</label>
    <input type="text" class="form-control" id="country">
</div>
<div class="mb-3">
  <label for="city" class="form-label">Город</label>
  <input type="text" class="form-control" id="city">
</div>

  <button @click="backStep" type="button" class="btn btn-light"> Назад</button>
  <button type="submit" class="btn btn-primary"> Зарегистрироваться</button>
</div>
</form>
  </template>
  </Popup>

<!-- 
  Сделал второе модальное окно по прошлому принципу (да, название компонента лучше не придумал))
  тут личная информация пользователя
  вставил svg, сделал таблицу
-->

  <PopupTwo
  :is-open="isPopupOpenAcc"
  @close="isPopupOpenAcc = false">
    <template #actions="{ confirm }">
      <form @submit.prevent="registerUser">
        <slot>
          <div class="container py-4 row">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-circle col-md-12 " viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          <div class="col-xs-12 col-sm-15 container-fluid mt-3">
            <span class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person align-baseline" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>  Имя</span>
              <ul class="list-group mb-3">
                <li class="list-group-item mt-1">Тестовый пользователь</li>
              </ul>
            <span class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key align-baseline" viewBox="0 0 16 16">
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg> Логин</span>
              <ul class="list-group mb-3">
                <li class="list-group-item mt-1">login123</li>
              </ul>
            <span class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox align-baseline" viewBox="0 0 16 16">
                <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
              </svg> Email</span>
              <ul class="list-group mb-3">
                <li class="list-group-item mt-1">test@loc.ru</li>
              </ul>
            <span class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar align-baseline" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              </svg> Дата регистрации</span>
              <ul class="list-group mb-3">
                <li class="list-group-item mt-1"> 01.01.2022 </li>
              </ul>
            </div>
          </div>
        </slot>
      </form>
    </template>
  </PopupTwo>
</template>

<script>
import Popup from "./components/RegAccount.vue";
import PopupTwo from "./components/UserAccount.vue";

export default {
  components: { 
    Popup, PopupTwo 
  },
  data() {
    return { isPopupOpen: false, isPopupOpenAcc: false, step: 1};
  },

  methods: {
    openPopup() {
      this.confirmation = "";
      this.isPopupOpen = true;
    },
    openPopupTwo() {
      this.isPopupOpenAcc = true;
    },
    nextStep() {
      this.step++
    },
    backStep() {
      this.step--
    }, 
    registerUser() {
      console.log('Регистрация прошла успешно');
    }
  },
};
</script>

<!-- для попапа -->

<style>
body { 
  overflow: hidden; 
  }
</style>
