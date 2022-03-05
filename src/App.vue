<template>
  <div id="app">
    <Pager />
  </div>
</template>

<script>
import Pager from "./components/views/index/index.vue";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {

    };
  },

};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
html{
  width: 100%;
  height: 100%;
}
body {
  min-width: 14.4rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  
}
#app {
  width: 100%;
  height: 100%;
}
.img_show{
  opacity: 0;
}
.img_show:hover{
  opacity: 1;
  cursor: pointer;
}
</style>>
