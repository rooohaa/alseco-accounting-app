<template>
   <div class="table-wrap">
      <div class="table-cols">
         <div class="col" v-for="col in columns" :key="col.id">
            {{ col.name }}
         </div>
      </div>
      <div class="rows-wrap">
         <item-row
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :name="item.title"
            :price="item.price"
            @on-edit="handleEdit"
         />
      </div>
   </div>
</template>

<script>
import ItemRow from './ItemRow.vue'

export default {
   components: { ItemRow },
   props: {
      items: {
         type: Array,
         required: true,
      },
   },
   data() {
      return {
         columns: [
            { id: '1', name: 'ID' },
            { id: '2', name: 'Название МЦ' },
            { id: '3', name: 'Стоимость МЦ' },
            { id: '4', name: 'Тип действия' },
         ],
      }
   },
   methods: {
      handleEdit(edittingItem) {
         this.$emit('on-edit', edittingItem)
      },
   },
}
</script>

<style lang="scss" scoped>
.table-wrap {
   background-color: #fff;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   margin-bottom: 25px;
   border-radius: 5px;

   max-height: 370px;
   overflow-y: auto;
}

.table-cols {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   padding: 10px 15px;

   background-color: #f9fbfd;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;

   .col {
      font-size: 14px;
      line-height: 18px;
      color: #616161;
   }
}
</style>
