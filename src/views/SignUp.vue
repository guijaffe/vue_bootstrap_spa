<template>
  <div>
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
  <!-- Здесь Кабинет с svg -->
          <button @click="showModal" type="button" class="btn btn-outline-light me-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> Кабинет</button>
        </div>
      </div>
  <!-- Это модальное окно и компонента кабинета пользователя -->
      <my-modal v-model:show="modalVisible">
        <user-cabinet />
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button @click="hideButt" class="btn btn-outline-primary btn-sm" type="button">Закрыть</button>
        </div>
      </my-modal>
    </header>
  <!-- 
    Здесь форма регистрации с bootstrap стилями 
    Связал с помощью v-model с data, так же применил функцию trim она обрезает пробелы слева и справа
  -->
<main>
  <form class="col-sm-6 mt-5 mx-auto px-4" novalidate>
    <div class="mb-3">
 <div v-show="step === 1" class="step">
  <div class="mb-3">
    <label for="name" class="form-label">Ваше имя</label>
    <input @blur="$v.formReg.name.touch()" v-model.trim="formReg.name" type="text" class="form-control" id="name">
  </div>
  <div class="mb-3">
    <label for="surname" class="form-label">Ваша фамилия</label>
    <input v-model.trim="formReg.surname" type="text" class="form-control" id="surname">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input v-model.trim="formReg.email" type="text" class="form-control" id="email">
  </div>
  <button @click="nextStep" type="button" class="btn btn-primary"> Следующий шаг</button>
  </div>

  <div v-show="step === 2" class="step">
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input v-model.trim="formReg.password.password" type="password" class="form-control" id="password">
  </div>
  <div class="mb-3 ">
    <label for="passwordConfirm" class="form-label">Подтверждение пароля</label>
    <input v-model.trim="formReg.password.confirm" type="password" class="form-control" id="confirmPassword">
  </div>
    <button @click="backStep" type="button" class="btn btn-light">Назад</button>
    <button @click="nextStep" type="button" class="btn btn-primary"> Следующий шаг</button>
  </div>

<div v-show="step === 3" class="step">
  <div class="mb-3">
    <label for="country" class="form-label">Страна</label>
    <input v-model.trim="formReg.country" type="text" class="form-control" id="country">
</div>
<div class="mb-3">
  <label for="city" class="form-label">Город</label>
  <input v-model.trim="formReg.city" type="text" class="form-control" id="city">
</div>

  <button @click="backStep" type="button" class="btn btn-light"> Назад</button>
  <button @click="registerUser" type="submit" class="btn btn-primary"> Зарегистрироваться</button>
</div>
</div>


  </form>
    </main>
  </div>
</template>

<script>
import UserCabinet from '../components/UserCabinet.vue'
import MyModal from '../components/MyModal.vue'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  components: {
    MyModal, UserCabinet
  },
  data() {
    return { 
      v$: useValidate(),
      modalVisible: false,
      step: 1,
        formReg: {
          name: '',
          surname: '',
          email: '',
          password: {
            password: '',
            confirm: '',
          },
          country: '',
          city: '',
      }
    }
  },
  methods: {
    showModal()  {
      this.modalVisible = true
    },
    hideButt() {
      this.modalVisible = false
    },
    nextStep() {
      this.step++
    },
    backStep() {
      this.step--
    }, 
    registerUser() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Регистрация прошла успешно'); 
      } else {
        alert('Ошибка регистрации')
      }
    }
  },
  validations() {
    return  {
      formReg: {
          name: { required },
          surname: { required },
          email: { required },
          password: {
            password: { required },
            confirm: { required },
          },
          country: { required },
          city: { required },
      }
    }
  }
}
</script>

<style>
</style>