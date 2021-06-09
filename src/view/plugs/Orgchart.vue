<template>
    <span>
      图片缩放
    </span>
    <el-row class="el-row-style">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="el-col-style">
     <div class="img-div img1" ref="imgdiv1">
     </div>
    </el-col>
    <el-col
      :push="0"
      :xs="12"
      :sm="12"
      :md="12"
      :lg="12"
      :xl="12"
      class="el-col-style">
        <div class="img-div img2" ref="imgdiv2">
      </div>
    </el-col>
    </el-row>
    <el-row class="el-row-style">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="el-col-style">
     <div class="img-div img3" ref="imgdiv3">
     </div>
    </el-col>
    <el-col
      :push="0"
      :xs="12"
      :sm="12"
      :md="12"
      :lg="12"
      :xl="12"
      class="el-col-style">
        <div class="img-div img4" ref="imgdiv4">
      </div>
    </el-col>
    </el-row>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import jquery from 'jquery';
const $ = jquery;
// import orgchart from 'Orgchart'
export default defineComponent({
  name: 'Orgchart',
  props: {
  },
  
  setup: ()=>{
    return { }
  },
  methods: {
    initView() {
    }
  },
  mounted() {
    this.initView()
  }
})

</script>

<style scoped>
.img-div {
  width: 100%;
  height: 500px;
  background-size: 100%;
  border-radius: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
.img1{
  background-image: url(../../assets/img/img1.jpg);
}
.img2{
  background-image: url(../../assets/img/img2.jpg);
}
.img3{
  background-image: url(../../assets/img/img3.jpg);
}
.img4{
  background-image: url(../../assets/img/img4.jpg);
}
.my-el-main {
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden;
}
.el-row-style {
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
}
.el-col-style {
  padding: 0px 20px;
  box-sizing: border-box;
}
</style>
