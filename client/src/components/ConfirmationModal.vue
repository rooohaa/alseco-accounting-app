<template>
   <div class="overlay">
      <div class="modal">
         <div class="head">
            <span>Подтверждение</span>
            <button class="del-btn" @click="onClose">
               &times;
            </button>
         </div>

         <p>Вы уверены что хотите удалить сотрудника ?</p>

         <div class="actions">
            <button class="del" @click="onDelete">Удалить</button>
            <button class="close" @click="onClose">Закрыть</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      onClose() {
         this.$emit('on-close')
      },
      onDelete() {
         this.$emit('on-delete')
      },
   },
}
</script>

<style lang="scss" scoped>
.modal {
   background-color: #fff;
   border-radius: 5px;

   width: 400px;

   display: flex;
   flex-direction: column;

   animation: popup 0.4s ease;

   .head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 10px 20px;

      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      background-color: #df4759;

      span {
         font-size: 14px;
         line-height: 18px;
         color: #fff;
      }

      button {
         border: none;
         width: 25px;
         height: 25px;

         font-size: 20px;
         color: #fff;

         background-color: inherit;

         display: grid;
         place-items: center;
      }
   }

   p,
   .actions {
      padding: 10px 20px;
   }

   p {
      font-size: 14px;
      line-height: 21px;
      color: #333;
   }

   .actions {
      align-self: flex-end;

      button {
         margin-right: 10px;
         padding: 8px 14px;
         border: none;
         border-radius: 5px;

         &.del {
            background-color: #df4759;
            color: #fff;
         }

         &.close {
            background-color: #f9fbfd;
            border: 1px solid #ccc;
         }

         &:last-child {
            margin-right: 0;
         }
      }
   }
}

@keyframes popup {
   from {
      opacity: 0;
      transform: scale(0);
   }
   to {
      opacity: 1;
      transform: scale(1);
   }
}
</style>
