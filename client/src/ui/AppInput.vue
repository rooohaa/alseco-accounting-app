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
   border-radius: 7px;
   border: 1px solid #d9e2ef;
   padding: 7px 14px;

   color: #333;
   font-size: 14px;
   line-height: 17px;

   &::placeholder {
      color: #abbcd5;
   }
}
</style>
