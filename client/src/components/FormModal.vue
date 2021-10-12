<template>
   <div class="overlay">
      <div class="form-modal">
         <button class="exit-btn" @click="closeModal">&times;</button>
         <h3>Добавление сотрудника</h3>

         <form @submit.prevent="submitForm">
            <div class="form-control">
               <app-input
                  inputType="text"
                  :value="name"
                  @on-input="onInput"
                  name="name"
                  placeHolder="Имя"
               />
            </div>

            <div class="form-control">
               <app-input
                  inputType="text"
                  :value="surname"
                  @on-input="onInput"
                  name="surname"
                  placeHolder="Фамилия"
               />
            </div>

            <div class="items-form">
               <button
                  type="button"
                  class="form-toggler"
                  @click="toggleItemsForm"
               >
                  {{ formBtnText }}
               </button>
               <items-form v-if="itemsFormActive" @on-add="addItem" />
            </div>

            <div class="items-list" v-if="items.length > 0">
               <item-info
                  v-for="item in items"
                  :key="item.title"
                  :title="item.title"
                  :price="item.price"
                  @on-delete="deleteItem"
               />
               <div class="sum-txt">
                  Общая стоимость: {{ totalItemsPrice }} тг
               </div>
            </div>

            <div class="error-txt" v-show="error">
               Заполните все поля для отправки формы
            </div>

            <div class="actions">
               <app-button text="Добавить" type="submit" variant="sm" />
               <button type="button" @click="closeModal" class="close-btn">
                  Закрыть
               </button>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import AppButton from '../ui/AppButton.vue'
import AppInput from '../ui/AppInput.vue'
import ItemInfo from './ItemInfo.vue'
import ItemsForm from './ItemsForm.vue'

export default {
   components: { AppInput, AppButton, ItemsForm, ItemInfo },
   data() {
      return {
         name: '',
         surname: '',
         error: false,
         items: [],
         itemsFormActive: false,
      }
   },
   methods: {
      closeModal() {
         this.$emit('on-close')
      },
      addItem(item) {
         this.items.push(item)
      },
      deleteItem(item) {
         this.items = this.items.filter(
            (el) => el.title !== item.title && el.price !== item.price
         )
      },
      onInput(inputName, value) {
         this[inputName] = value
      },
      submitForm() {
         if (!this.name || !this.surname) {
            this.error = true
            return
         }

         const data = {
            name: this.name,
            surname: this.surname,
            items: this.items,
         }

         this.$store.dispatch('postNewEmployee', data)
         this.closeModal()
      },
      toggleItemsForm() {
         this.itemsFormActive = !this.itemsFormActive
      },
      closeItemsForm() {
         this.itemsFormActive = false
      },
   },
   computed: {
      formBtnText() {
         return this.itemsFormActive
            ? 'Закрыть форму добавления МЦ'
            : 'Составить список выданных МЦ'
      },
      totalItemsPrice() {
         let sum = 0

         for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].price
         }

         return sum
      },
   },
}
</script>

<style lang="scss" scoped>
.form-modal {
   width: 450px;
   padding: 25px;

   position: relative;
   animation: popUp 0.4s ease-out;
   background-color: #fff;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

   border-radius: 4px;

   h3 {
      color: #333;
      font-size: 17px;
      line-height: 21px;

      margin-bottom: 25px;
   }

   .exit-btn {
      position: absolute;
      width: 25px;
      height: 25px;

      font-size: 25px;
      color: #aaa;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: inherit;
      border: none;

      top: 10px;
      right: 10px;
   }

   form {
      width: 100%;

      display: flex;
      flex-direction: column;
      row-gap: 10px;

      .form-control {
         width: 100%;
      }
   }

   .actions {
      display: flex;
      align-items: center;
      column-gap: 8px;

      align-self: flex-end;

      .close-btn {
         padding: 7px 14px;
         font-size: 14px;
         background-color: inherit;
         border-radius: 5px;
         border: 1px solid #d9e2ef;
         color: #333;
      }
   }

   .error-txt {
      font-size: 12px;
      line-height: 16px;
      color: #df4759;
   }

   .form-toggler {
      display: flex;
      align-items: center;
      column-gap: 15px;

      color: $main-color;
      border: none;
      background-color: inherit;
      text-decoration: underline;
      font-size: 13px;

      margin-bottom: 10px;
   }

   .items-list {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      row-gap: 10px;
   }

   .sum-txt {
      font-size: 12px;
      line-height: 17px;
   }
}

@keyframes popUp {
   from {
      opacity: 0;
      transform: scale(0);
   }
   to {
      opacity: 1;
      transform: scale(1);
   }
}
</style>
