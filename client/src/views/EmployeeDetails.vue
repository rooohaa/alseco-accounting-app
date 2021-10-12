<template>
   <section class="details-section">
      <div class="container">
         <button class="back-btn" @click="navigateBack">Назад</button>
         <h3>Информация о сотруднике</h3>

         <info-card
            :name="currentEmployee.name"
            :surname="currentEmployee.surname"
            :id="currentEmployee.id"
            :itemsCount="employeeItems.length"
            :totalPrice="totalItemsPrice"
         />
      </div>
   </section>
</template>

<script>
import InfoCard from '../components/InfoCard.vue'
import { getEmployeeItemsData } from '../utils'

export default {
   components: { InfoCard },
   methods: {
      navigateBack() {
         this.$router.go(-1)
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
   padding: 50px 0;

   h3 {
      font-size: 24px;
      line-height: 28px;
      color: #333;
   }
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
