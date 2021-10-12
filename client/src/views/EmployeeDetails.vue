<template>
   <section class="details-section">
      <div class="container">
         <button class="back-btn" @click="navigateBack">Назад</button>

         <div class="wrapper">
            <div>
               <h3>Информация о сотруднике</h3>

               <info-card
                  v-if="currentEmployee"
                  :name="currentEmployee.name"
                  :surname="currentEmployee.surname"
                  :id="currentEmployee.id"
                  :itemsCount="employeeItems.length"
                  :totalPrice="totalItemsPrice"
               />
            </div>

            <div class="item-form">
               <h3>Форма добавления МЦ</h3>

               <div class="form-card">
                  <items-form @on-add="onItemAdd" />
               </div>
            </div>
         </div>

         <items-table
            v-if="employeeItems && employeeItems.length > 0"
            :items="employeeItems"
         />
      </div>
   </section>
</template>

<script>
import InfoCard from '../components/InfoCard.vue'
import ItemsForm from '../components/ItemsForm.vue'
import ItemsTable from '../components/ItemsTable.vue'
import { getEmployeeItemsData } from '../utils'

export default {
   components: { InfoCard, ItemsForm, ItemsTable },
   methods: {
      navigateBack() {
         this.$router.go(-1)
      },
      onItemAdd(newItem) {
         const { title, price } = newItem

         const data = {
            title,
            price,
            employee_id: +this.$route.params.id,
         }

         this.$store.dispatch('addNewItem', data)
      },
   },
   computed: {
      currentEmployee() {
         const id = +this.$route.params.id
         return this.$store.state.employees.find((el) => el.id === id)
      },
      employeeItems() {
         const items = getEmployeeItemsData(
            this.currentEmployee,
            this.$store.state.items
         )

         return items
      },
      totalItemsPrice() {
         let sum = 0

         for (let item of this.employeeItems) {
            sum += item.price
         }
         return sum
      },
   },
}
</script>

<style lang="scss" scoped>
.details-section {
   padding: 20px 0;

   h3 {
      font-size: 24px;
      line-height: 28px;
      color: #333;
   }
}

.wrapper {
   width: 100%;

   display: flex;
   align-items: flex-start;
   justify-content: flex-start;

   column-gap: 30px;
}

.form-card {
   margin: 25px 0;

   width: 450px;
   background-color: #fff;
   border-radius: 3px;

   padding: 20px;

   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.back-btn {
   margin-bottom: 25px;
   padding: 8px 15px;

   background-color: #fff;
   border-radius: 5px;

   border: 1px solid $main-color;
   color: $main-color;
   font-size: 14px;
   font-weight: bold;
}
</style>
