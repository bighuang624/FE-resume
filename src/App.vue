<template>
  <div id="app">
    <leftNav></leftNav>
    <main>2哈哈哈</main>
  </div>
</template>

<script>
  import LeftNav from './components/LeftNav';
  import Main from './components/Main';

  export default {
    name: 'app',
    components: {
      LeftNav,
      Main,
    },
  };
</script>

<style lang="scss">
  @import "style/common";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: $common-black;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    @include no-select;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
