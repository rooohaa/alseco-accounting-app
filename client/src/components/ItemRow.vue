<template>
   <div class="item-row">
      <div class="item">{{ id }}</div>
      <div class="item">{{ name }}</div>
      <div class="item">{{ price }}</div>

      <div class="actions">
         <button @click="editRow({ id, name, price })">
            <img src="../assets/pencil-alt-solid.svg" alt="Edit icon icon" />
         </button>
         <button @click="deleteRow(id)">
            <img src="../assets/trash-solid.svg" alt="Delete icon" />
         </button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      id: {
         type: Number,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
   },
   methods: {
      deleteRow(id) {
         const isDeleting = window.confirm(
            'Вы действительно хотите удалить эту МЦ?'
         )

         if (isDeleting) {
            this.$store.dispatch('deleteItem', id)
         }
      },
      editRow(item) {
         this.$emit('on-edit', item)
      },
   },
}
</script>

<style lang="scss" scoped>
.item-row {
   width: 100%;

   background-color: #fff;
   transition: background-color 0.4s ease;

   display: grid;
   grid-template-columns: repeat(4, 1fr);
   justify-content: center;

   padding: 15px;

   border-bottom: 1px solid #f3f6f8;

   .item {
      font-size: 14px;
      color: #333;
   }

   &:last-child {
      border-bottom: none;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
   }

   &:hover {
      background-color: #f9fbfd;
   }
}

.actions {
   display: flex;
   align-items: center;
   column-gap: 10px;

   button {
      width: 35px;
      height: 35px;

      border: none;
      background-color: inherit;
      border-radius: 50%;
      padding: 5px;

      transition: background-color 0.4s ease;

      &:hover {
         background-color: #d9e2ef;
      }

      img {
         width: 70%;
         height: 70%;
         object-fit: contain;
      }
   }
}
</style>
