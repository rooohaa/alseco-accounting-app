<template>
   <div class="container">
      <div class="greet">
         <div>
            <h3>Тестовое задание в Alseco</h3>
            <app-button
               text="Перейти в панель управления"
               :onClick="onNavigate"
            />
         </div>
      </div>
   </div>
</template>

<script>
import AppButton from '../ui/AppButton'

export default {
   name: 'Home',
   components: { AppButton },
   methods: {
      onNavigate() {
         this.$router.push({ path: '/dashboard' })
      },
   },
}
</script>

AppButton
<style lang="scss" scoped>
h1 {
   font-size: 50px;
   color: $main-color;
}

.greet {
   padding: 200px 0;
   width: 100%;

   display: flex;
   align-content: center;
   justify-content: center;

   div {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 15px;

      h3 {
         font-size: 36px;
         color: #333;
      }
   }
}
</style>
