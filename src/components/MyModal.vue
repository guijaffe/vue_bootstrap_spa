<template>
  <div class="modal shadow" v-if="show" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
/**
 *  Сделал логику появления модалки через булевый тип, по умолчанию модалка false, но при нажатии true
 * в hideModal логика закрывания модалки при нажатии вне контентной части модалки, все работает через слушатель события нажатия '@click'
 */

export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  background: #fff;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding: 20px;
  }
</style>