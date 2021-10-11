<template>
   <h1>{{ message }}</h1>
   <router-view />
</template>

<script>
export default {
   data() {
      return {
         message: 'Rakhat',
      }
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
   font-family: 'Lato', sans-serif;
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
</style>
