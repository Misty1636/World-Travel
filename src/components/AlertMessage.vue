<template>
  <div class="message-alert">
    <div class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      {{ item.message }}
      <button type="button" class="close" @click="REMOVEMESSAGE(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AlertMessage',
  methods: {
    // removeMessage(num) {
    //   this.$store.dispatch('AlertModule/removeMessage', num); 方法1
    //   this.$store.commit('AlertModule/REMOVEMESSAGE', num);  方法2
    // },
    ...mapMutations('AlertModule', ['REMOVEMESSAGE']), // 方法3 最短程式碼
    // 方法4 使用mapActions效果皆一樣,但是需要換成對應的function, 小寫版
  },
  computed: {
    ...mapGetters('AlertModule', ['messages']),
  },
};
</script>

<style lang="scss" scope>
.message-alert {
  position: fixed;
  max-width: 265px;
  top: 60px;
  right: 20px;
  z-index: 1100;
  .close{
    outline: 0;
    &:focus{
      outline: 0;
    }
  }
}
</style>
