<template>
   <div class="card">
      <div class="info-row">
         <div class="info-key">Имя:</div>
         <div class="value">{{ name }}</div>
      </div>
      <div class="info-row">
         <div class="info-key">Фамилия:</div>
         <div class="value">{{ surname }}</div>
      </div>
      <div class="info-row">
         <div class="info-key">ФИО:</div>
         <div class="value">{{ fullName }}</div>
      </div>
      <div class="info-row">
         <div class="info-key">Количество выданных МЦ:</div>
         <div class="value">{{ itemsCount }}</div>
      </div>
      <div class="info-row">
         <div class="info-key">Общая стоимость МЦ:</div>
         <div class="value">{{ totalPrice }} тг</div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      name: {
         type: String,
         required: true,
      },
      surname: {
         type: String,
         required: true,
      },
      id: {
         type: Number,
         required: true,
      },
      itemsCount: {
         type: Number,
         required: true,
      },
      totalPrice: {
         type: Number,
         required: true,
      },
   },
   computed: {
      fullName() {
         return this.name + ' ' + this.surname
      },
   },
}
</script>

<style lang="scss" scoped>
.card {
   margin: 25px 0;
   width: 450px;

   background-color: #fff;
   border-radius: 3px;

   padding: 10px 20px;

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   row-gap: 10px;

   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   border-top: 4px solid $main-color;
}

.info-row {
   width: 100%;

   padding: 5px 0;

   display: flex;
   align-items: center;
   column-gap: 7px;

   border-bottom: 1px solid #f2f2f2;

   .info-key,
   .value {
      font-size: 14px;
      line-height: 18px;
   }

   .info-key {
      color: #adb5bd;
      font-weight: bold;
   }

   .value {
      color: #333;
      font-weight: bold;
   }
}
</style>
