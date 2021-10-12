<template>
   <div class="item">
      <div class="item-inner">
         Название МЦ:
         <span>{{ title }}</span>
      </div>
      <div class="item-inner">
         Стоимость МЦ:
         <span>{{ price }}</span>
      </div>
      <button
         type="button"
         class="del-btn"
         @click="handleDelete({ title, price })"
      >
         <img src="../assets/trash-solid.svg" alt="Remove icon" />
      </button>
   </div>
</template>

<script>
export default {
   props: {
      title: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
   },
   methods: {
      handleDelete(item) {
         this.$emit('on-delete', item)
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   display: flex;
   align-items: center;
   justify-content: space-between;
   border: 1px solid $main-color;
   border-radius: 5px;
   padding: 5px 10px;
   width: 100%;

   .item-inner {
      font-size: 12px;
      line-height: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;

      color: #9e9e9e;

      span {
         color: #333;
      }
   }

   .del-btn {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      background-color: inherit;

      img {
         width: 80%;
         height: 80%;
         object-fit: contain;
      }
   }
}
</style>
