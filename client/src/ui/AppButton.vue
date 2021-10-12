<template>
   <button
      class="app-btn"
      :type="type"
      :class="{ sm: variant === 'sm' }"
      @click="onClick"
   >
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
      type: {
         type: String,
         required: false,
         default: 'button',
      },
      onClick: {
         type: Function,
         required: false,
      },
      variant: {
         type: String,
         required: false,
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

   &.sm {
      padding: 7px 14px;
      letter-spacing: 0;
   }

   &:hover {
      background-color: #3644e0;
   }

   &:active {
      background-color: rgba(81, 94, 232, 0.8);
   }
}
</style>
