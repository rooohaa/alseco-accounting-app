<template>
   <section class="dashboard-section">
      <div class="container">
         <h3 class="page-title">Список сотрудников</h3>
         <app-table />
      </div>
   </section>
</template>

<script>
import AppTable from '../components/AppTable'

export default {
   components: {
      AppTable,
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
}
</style>
