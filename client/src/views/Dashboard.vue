<template>
   <section class="dashboard-section">
      <div class="container">
         <div class="table-head">
            <h3 class="page-title">Список сотрудников</h3>
            <div class="controls">
               <app-select
                  placeHolder="Отсортировать по"
                  :options="[
                     { value: 'ФИО', meta: 'fullName' },
                     { value: 'кол-во МЦ', meta: 'itemCount' },
                     { value: 'Общ. стоимости', meta: 'totalPrice' },
                  ]"
                  @on-select="onSelect"
                  @on-reset="onReset"
               />
               <app-button
                  text="Добавить сотрудника"
                  :onClick="onEmployeeAdd"
               />
            </div>
         </div>
         <app-table />
      </div>
   </section>
</template>

<script>
import AppTable from '../components/AppTable.vue'
import AppSelect from '../components/AppSelect.vue'
import AppButton from '../ui/AppButton.vue'

export default {
   components: {
      AppTable,
      AppSelect,
      AppButton,
   },
   methods: {
      onEmployeeAdd() {
         console.log('adding emp')
      },
      onSelect(value) {
         this.$store.commit('setSortValue', value)
      },
      onReset() {
         this.$store.commit('setSortValue', '')
      },
   },
}
</script>

<style lang="scss" scoped>
.dashboard-section {
   width: 100%;
   padding: 50px 0;

   .page-title {
      font-size: 24px;
      line-height: 28px;
      color: #333;
   }

   .table-head {
      display: flex;
      align-content: center;
      justify-content: space-between;

      .controls {
         display: flex;
         align-items: center;
         column-gap: 30px;
      }
   }
}
</style>
