<template>
   <button class="app-btn" @click="onClick">
      {{ text }}
   </button>
</template>

<script>
export default {
   props: {
      text: {
         type: String,
         required: true,
      },
      onClick: {
         type: Function,
      },
   },
}
</script>

<style lang="scss" scoped>
.app-btn {
   background-color: $main-color;
   color: #fff;

   border-radius: 5px;
   border: none;
   padding: 10px 25px;

   text-transform: none;
   font-size: 14px;
   letter-spacing: 1px;

   transition: background-color 0.4s ease;

   &:hover {
      background-color: #3644e0;
   }

   &:active {
      background-color: rgba(81, 94, 232, 0.8);
   }
}
</style>
