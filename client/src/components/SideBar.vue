<template>
   <aside class="app-sidebar">
      <nav>
         <ul>
            <li>
               <router-link to="/">Главная</router-link>
            </li>

            <li>
               <router-link to="/dashboard">Панель управления</router-link>
            </li>
         </ul>
      </nav>
   </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-sidebar {
   background-color: $main-color;
   padding: 100px 10px;
   height: 100vh;
   width: 22%;
}

ul {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   row-gap: 10px;

   li {
      width: 100%;
      cursor: pointer;

      a {
         width: 100%;
         display: block;
         color: #d1d1d9;

         font-size: 16px;
         line-height: 21px;

         padding: 10px;

         border-radius: 7px;
         transition: background-color 0.4s ease;

         &:hover {
            background-color: #5866f5;
         }

         &.router-link-active {
            background-color: #5866f5;
         }
      }
   }
}
</style>
