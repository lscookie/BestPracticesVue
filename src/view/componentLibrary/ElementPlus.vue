<template>
  <iframe src="https://element-plus.org/#/zh-CN/component/custom-theme" frameborder="0" class="iframe-style" ></iframe>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'ElementPlus',
  props: {
  },

  setup: ()=>{
    return {  }
  },

})

</script>

<style scoped>
.iframe-style {
  width: 100%;
  height: 100%
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>