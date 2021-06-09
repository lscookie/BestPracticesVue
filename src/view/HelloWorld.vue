<template>
  <el-container style="height: 100%; width: 100%; border: 1px solid #eee">
    <!-- 左侧菜单栏 -->
    <el-row style="width: 100%">
      <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="2">
        <el-aside style="background-color: rgb(238, 241, 246);width: 100%;height:100%">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template #title><i class="el-icon-message"></i>组件库</template>
                <el-menu-item index="1-1" @click="meniItemClick('AntDesignVue', {})">Ant-design-vue</el-menu-item>
                <el-menu-item index="1-2" @click="meniItemClick('ElementPlus', {})">Vant</el-menu-item>
                <el-menu-item index="1-3" @click="meniItemClick('Vant', {})">element-plus</el-menu-item>
                <el-menu-item index="1-4" @click="meniItemClick('VueAdminPro', {})">Vue Admin Pro</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template #title><i class="el-icon-menu"></i>插件</template>
                <el-menu-item index="2-1" @click="meniItemClick('Echarts', {})">echarts</el-menu-item>
                <el-menu-item index="2-2" @click="meniItemClick('Orgchart', {})">Orgchart</el-menu-item>
                <el-menu-item index="2-3" @click="meniItemClick('Ztree', {})">Ztree</el-menu-item>
                 <el-menu-item index="2-4" @click="meniItemClick('ArgGis', {})">ArgGis</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-col>
      <el-col :xs="20" :sm="20" :md="20" :lg="21" :xl="22">
        <!-- 右侧主体部分 -->
        <el-main class="my-el-main">
          <router-view></router-view>
        </el-main>
      </el-col>
      <!-- 右侧头部内容 -->
      <!-- <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <template #dropdown>
              <el-dropdown-menu>
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
      </el-container> -->
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter  } from 'vue-router'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    const router = useRouter()
    function goto(str: string, query: any){
      router.push({
          path: str,
          query: query
        })
    }
    return { count, goto }
  },
  methods: {
    meniItemClick(menuName: string, params: any) {
      this.goto('/hello/'+ menuName, params)
    }
  }
})
</script>

<style scoped>
  .my-el-main {
    width: 100%;
    height: 100%;
    padding: 0px;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>
