<template>
  <el-row class="el-row-style">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="el-col-style">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>直方图</span>
          </div>
        </template>
        <div ref="chartBar" style="width: 100%; height: 400px"></div>
      </el-card>
    </el-col>
    <el-col
      :push="0"
      :xs="12"
      :sm="12"
      :md="12"
      :lg="12"
      :xl="12"
      class="el-col-style"
    >
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>曲线图</span>
          </div>
        </template>
        <div ref="chartLine" style="width: 100%; height: 400px"></div>
      </el-card>
    </el-col>
  </el-row>
  <el-row class="el-row-style">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="el-col-style">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>饼图图</span>
          </div>
        </template>
        <div ref="chartPie" style="width: 100%; height: 400px"></div>
      </el-card>
    </el-col>
    <el-col
      :push="0"
      :xs="12"
      :sm="12"
      :md="12"
      :lg="12"
      :xl="12"
      class="el-col-style"
    >
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>仪表图</span>
          </div>
        </template>
        <div ref="chartMap" style="width: 100%; height: 400px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as echarts from "echarts";
import jquery from "jquery";
const $ = jquery;
export default defineComponent({
  name: "EchartsView",
  props: {},
  setup: () => {
    return {};
  },
  methods: {
    initCharts() {
      // 在ts中有严格的类型限制，在出现这种情况时需要加上断言
      var myChartBar = echarts.init(this.$refs.chartBar as HTMLElement);
      var myChartLine = echarts.init(this.$refs.chartLine as HTMLElement);
      var myChartPie = echarts.init(this.$refs.chartPie as HTMLElement);
      // 指定图表的配置项和数据
      var optionBar = {
        title: {},
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      var optionLine = {
        title: {
          text: "折线图堆叠",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      var optionPie = {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [50, 150],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChartPie.setOption(optionPie);
      myChartLine.setOption(optionLine);
      myChartBar.setOption(optionBar);
    },
    showMap() {
      var option = {
        series: [
          {
            type: "gauge",
            progress: {
              show: true,
              width: 18,
            },
            axisLine: {
              lineStyle: {
                width: 18,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 25,
              color: "#999",
              fontSize: 20,
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 25,
              itemStyle: {
                borderWidth: 10,
              },
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 80,
              offsetCenter: [0, "70%"],
            },
            data: [
              {
                value: 70,
              },
            ],
          },
        ],
      };
      echarts.init(this.$refs.chartMap as HTMLElement).setOption(option);
    },
  },
  mounted() {
    this.initCharts();
    this.showMap();
  },
});
</script>

<style scoped>
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
