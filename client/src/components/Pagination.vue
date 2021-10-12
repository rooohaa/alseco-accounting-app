<template>
   <div class="wrap">
      <div class="row-info">Строк на странице: {{ currentRowsLength }}</div>
      <div class="active-page">{{ currentPage }} стр. из {{ totalPages }}</div>

      <div class="actns">
         <button class="left-btn" @click="paginateBack">
            <img src="../assets/arrow-down.svg" alt="Arrow" />
         </button>
         <button class="right-btn" @click="paginateForward">
            <img src="../assets/arrow-down.svg" alt="Arrow" />
         </button>
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      paginateBack() {
         if (this.currentPage < 2) {
            return
         } else {
            this.$store.commit('setCurrentPage', this.currentPage - 1)
         }
      },
      paginateForward() {
         if (this.currentPage >= this.totalPages) {
            return
         } else {
            this.$store.commit('setCurrentPage', this.currentPage + 1)
         }
      },
   },
   computed: {
      currentPage() {
         return this.$store.state.currentPage
      },
      totalPages() {
         return Math.ceil(this.$store.getters.tableData.length / 10)
      },
      currentRowsLength() {
         return this.$store.getters.currentTableRowsLength
      },
   },
}
</script>

<style lang="scss" scoped>
.wrap {
   width: 100%;
   padding: 15px 10px;

   display: flex;
   align-items: center;
   justify-content: flex-end;
   column-gap: 40px;

   font-size: 14px;
   line-height: 17px;

   color: #333;

   .actns {
      display: flex;
      align-items: center;
      column-gap: 15px;

      button {
         width: 22px;
         height: 22px;

         display: flex;
         align-items: center;
         justify-content: center;

         border: none;
         background-color: inherit;

         &.left-btn {
            img {
               transform: rotate(90deg);
            }
         }

         &.right-btn {
            img {
               transform: rotate(-90deg);
            }
         }

         img {
            width: 62%;
            height: 62%;
            object-fit: contain;
         }
      }
   }
}
</style>
