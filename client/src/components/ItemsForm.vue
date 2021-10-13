<template>
   <div class="items-form">
      <app-input
         inputType="text"
         :value="itemName"
         @on-input="onInput"
         name="itemName"
         placeHolder="Название МЦ"
      />

      <app-input
         inputType="text"
         :value="itemPrice"
         @on-input="onInput"
         name="itemPrice"
         placeHolder="Стоимость МЦ"
      />

      <app-button :text="btnText" variant="sm" :onClick="submitForm" />
   </div>
</template>

<script>
import AppButton from '../ui/AppButton.vue'
import AppInput from '../ui/AppInput.vue'

export default {
   components: { AppInput, AppButton },
   props: {
      defaultName: {
         type: String,
         required: false,
         default: '',
      },
      defaultPrice: {
         type: [Number, String],
         required: false,
         default: '',
      },
      mode: {
         type: String,
         required: false,
      },
   },
   data() {
      return {
         itemName: '',
         itemPrice: '',
      }
   },
   methods: {
      onInput(inputName, value) {
         this[inputName] = value
      },
      submitForm() {
         if (!this.itemName || !this.itemPrice) {
            alert('Поля не должны бысть пустыми')
            return
         }

         if (isNaN(this.itemPrice)) {
            alert('Введите корректное значение стоимости')
            return
         }

         const item = {
            title: this.itemName,
            price: +this.itemPrice,
         }

         if (this.mode === 'add') {
            this.$emit('on-add', item)
         } else {
            this.$emit('on-update', item)
         }

         this.resetForm()
      },
      resetForm() {
         this.itemName = ''
         this.itemPrice = ''
      },
   },
   computed: {
      btnText() {
         return this.mode === 'add' ? 'Добавить МЦ' : 'Редактировать'
      },
   },
   watch: {
      defaultName: {
         immediate: true,
         handler(newValue, oldValue) {
            this.itemName = newValue
         },
      },
      defaultPrice: {
         immediate: true,
         handler(newValue, oldValue) {
            this.itemPrice = newValue + ''
         },
      },
   },
}
</script>

<style lang="scss" scoped>
.items-form {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   row-gap: 10px;
}
</style>
