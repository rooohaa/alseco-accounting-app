<template>
   <div class="app-root">
      <side-bar />
      <main class="main">
         <router-view />
      </main>
   </div>
</template>

<script>
import SideBar from './components/SideBar'

export default {
   components: {
      SideBar,
   },
   created() {
      this.$store.dispatch('getEmployees')
      this.$store.dispatch('getMaterialItems')
   },
}
</script>

<style lang="scss">
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

body {
   font-family: 'Noto Sans', sans-serif;
   background-color: $primary-color;
}

a {
   text-decoration: none;
}

ul {
   list-style: none;
}

button,
input {
   outline: none;
}

button {
   cursor: pointer;
}

.container {
   max-width: 1100px;
   width: 100%;
   height: 100%;
   margin: 0 auto;
   padding: 0 10px;
   overflow: hidden;
}

.app-root {
   display: flex;
   align-items: flex-start;
}

.main {
   width: 78%;
   height: 100%;
}

.overlay {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 20;
   background-color: rgba(0, 0, 0, 0.6);

   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
