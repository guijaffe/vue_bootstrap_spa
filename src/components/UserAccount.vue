<template>
  <div v-if="isOpen" class="backdrop" @click="close" >
    <div class="userAccount" @click.stop>
      <h1>Личная информация</h1>
      <hr />
      <div class="footer">
        <slot name="actions" :close="close" :confirm="confirm">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    ok: null,
    close: null,
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close();
      }
    },

    close() {
      this.$emit("close");
    },
    confirm() {
      this.$emit("ok");
    },
  },
};
</script>

<style>
.userAccount {
  top: 50px;
  padding: 25px;
  padding-left: 50px;
  padding-right: 50px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}

.userAccount li {
  width: 110%;
}
</style>