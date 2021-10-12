<template>
   <input
      :type="inputType"
      :placeholder="placeHolder"
      :value="value"
      @input="onInput"
   />
</template>

<script>
export default {
   props: {
      inputType: {
         type: String,
         required: true,
      },
      value: {
         type: String,
         required: true,
      },
      placeHolder: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
   },
   methods: {
      onInput(e) {
         this.$emit('on-input', this.name, e.target.value)
      },
   },
}
</script>

<style lang="scss" scoped>
input {
   width: 100%;

   border-radius: 7px;
   border: 1px solid #d9e2ef;
   padding: 10px 15px;

   color: #333;
   font-size: 14px;
   line-height: 17px;

   &:focus {
      border: 1px solid $main-color;
   }

   &::placeholder {
      color: #abbcd5;
   }
}
</style>
