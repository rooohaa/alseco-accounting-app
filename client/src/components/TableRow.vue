<template>
   <div class="table-row" @contextmenu="handler($event)">
      <div class="item">{{ id }}</div>
      <div class="item">{{ fullName }}</div>
      <div class="item">{{ itemCount }}</div>
      <div class="item">{{ totalPrice }}</div>

      <div v-show="isMenuOpen" class="context-menu">
         <button class="del-btn" @click="deleteItem(id)">Удалить</button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      id: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      surname: {
         type: String,
         required: true,
      },
      itemCount: {
         type: Number,
         required: true,
      },
      totalPrice: {
         type: Number,
         required: true,
      },
   },
   data() {
      return {
         isMenuOpen: false,
      }
   },
   methods: {
      handler(event) {
         event.preventDefault()

         this.isMenuOpen = !this.isMenuOpen
      },
      deleteItem(id) {
         this.$emit('on-delete', id)
         this.isMenuOpen = false
      },
   },
   computed: {
      fullName() {
         return `${this.surname} ${this.name.charAt(0)}.`
      },
   },
}
</script>

<style lang="scss" scoped>
.table-row {
   width: 100%;

   position: relative;

   background-color: #fff;
   cursor: pointer;
   transition: background-color 0.4s ease;

   display: grid;
   grid-template-columns: repeat(4, 1fr);
   justify-content: center;

   padding: 15px;

   border-bottom: 1px solid #f3f6f8;

   &:last-child {
      border-bottom: none;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
   }

   &:hover {
      background-color: #f9fbfd;
   }
}

.item {
   font-size: 14px;
   line-height: 18px;
   color: #333;
}

.context-menu {
   background-color: #fff;
   border-radius: 5px;

   padding: 5px;

   width: 120px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

   position: absolute;
   z-index: 10;

   right: 50px;
   top: 50%;
   transform: translateY(-20%);

   button {
      border: none;
      background-color: inherit;
      color: #606470;

      padding: 10px;
      width: 100%;
      border-radius: 5px;

      text-align: left;

      transition: color, background-color 0.4s ease;

      &:hover {
         color: #e6576c;
         background-color: rgba(230, 87, 108, 0.2);
      }
   }
}
</style>
