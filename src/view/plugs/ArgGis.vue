<template>
  <div id="map" style="width: 100%;height:100%"></div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from 'vue'
import { loadModules } from "esri-loader";
export default defineComponent({
  name: 'ArgGis',
  props: {
  },

  setup: ()=>{
    const state = reactive({
      name: "arcgis"
    });
    onMounted(handleMounted);
    return { state };
  },
  mounted() {
    
  }
})

function handleMounted() {
  loadModules(["esri/Map", "esri/views/MapView"]).then(([Map, MapView]) => {
    let map = new Map({
      basemap: "hybrid", // streets，hybrid
    });
    let view = new MapView({
      container: "map",
      map,
      center: [106, 34.09042],
      zoom: 3,
    });
  });
}
</script>

<style scoped>
</style>

