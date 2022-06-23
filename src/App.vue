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
.dropdown:hover .dropdown-menu {
  display: block;
}

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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
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


/* placeholder loader styles */
.placeholder-item {
  border-radius: 5%;
  background-color: #ffffff;
  color: #ffffff !important;
  position: relative;
  overflow: hidden;
    -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
.placeholder-item::before {
  content: '';
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(to right, transparent 0%, #f4f4f4 50%, transparent 100%);
  animation: load .8s ease-in-out infinite;
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
/* end */

</style>
