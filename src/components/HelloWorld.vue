<template>
    <div class="hello">
    <!-- img tag를 이용한 일반적인 Image 생성. -->
    <header class="logo">
        이미지 확대 축소
    </header>
    <!-- v-viewer를 이용한 Image 생성. -->
    <viewer :images="this.images">
        <img class="gallary_image" v-for="image in this.images" :src="image" :key="image" />
    </viewer>
    <footer>This is a Footer.</footer>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      images: [          
          'https://www.starfieldmarket.com/resource/images/map/map_b1.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
