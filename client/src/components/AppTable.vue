<template>
   <div class="table-root">
      <div class="cols">
         <div v-for="column in columns" :key="column.id" class="col">
            {{ column.text }}
         </div>
      </div>

      <div class="table-inner" v-if="tableData && tableData.length > 0">
         <table-row
            v-for="row in tableData"
            :key="String(row.id)"
            :id="String(row.id)"
            :name="row.name"
            :surname="row.surname"
            :itemCount="row.itemCount"
            :totalPrice="row.totalPrice"
            @on-delete="onDelete"
         />
      </div>
      <div class="message" v-else>
         <span>В ващей таблице пока нету сотрудников.</span>
      </div>

      <teleport to="body">
         <confirmation-modal
            v-show="isModalOpen"
            @on-delete="deleteEmployee"
            @on-close="closeModal"
         />
      </teleport>
   </div>
</template>

<script>
import TableRow from './TableRow.vue'
import ConfirmationModal from './ConfirmationModal.vue'
import { constructTableData } from '../utils'

export default {
   components: { TableRow, ConfirmationModal },
   data() {
      return {
         columns: [
            { id: '1', text: 'ID' },
            { id: '2', text: 'ФИО' },
            { id: '3', text: 'Кол-во МЦ' },
            { id: '4', text: 'Общая стоимость' },
         ],
         isModalOpen: false,
         deletingEmployeeId: null,
      }
   },
   methods: {
      onDelete(id) {
         this.isModalOpen = true
         this.deletingEmployeeId = id
      },
      closeModal() {
         this.isModalOpen = false
         this.deletingEmployeeId = null
      },
      deleteEmployee() {
         this.$store.dispatch('deleteEmployee', this.deletingEmployeeId)
         this.isModalOpen = false
      },
   },
   computed: {
      tableData() {
         return this.$store.getters.tableData
      },
   },
}
</script>

<style lang="scss" scoped>
.table-root {
   background-color: #fff;
   border-radius: 7px;

   margin: 20px 0;

   width: 100%;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.cols {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   justify-content: center;

   background-color: #f9fbfd;

   border-top-left-radius: 7px;
   border-top-right-radius: 7px;
   padding: 10px 15px;

   .col {
      font-size: 14px;
      line-height: 18px;
      color: #616161;
   }
}

.table-inner {
   display: flex;
   flex-direction: column;
}

.message {
   width: 100%;
   padding: 20px 15px;

   display: flex;
   align-self: center;
   justify-content: center;

   span {
      font-size: 14px;
      line-height: 21px;
      color: #333;
   }
}
</style>
