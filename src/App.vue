<template>
 <div id="app">     
    <!-- <main> -->
      <!-- <Nav /> -->
      <component :is="layout">

        <router-view/>     
      </component>
    <!-- </main> -->
</div>
 
</template>

<script>
const defaultLayout = 'default'
// import Nav from "./components/Nav.vue"
export default {

  components: {
    // Nav
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout ) + '-layout'
    }
  }
}
</script>

<style>
/* width */
::-webkit-scrollbar {
	width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
	background-color:#F2FBFC;
}
</style>
