<template>
<div id="app">
    <HelloViewer />
</div>
</template>

<script> 
import HelloViewer from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloViewer,
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.contents {
  padding: 10px;
  text-align: left; 
}
</style>
