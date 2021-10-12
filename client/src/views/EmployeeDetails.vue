<template>
   <h1>hi world</h1>
</template>

<script>
export default {
   created() {
      const id = +this.$route.params.id
      const employee = this.$store.state.employees.find((el) => el.id === id)
      console.log(employee)
   },
}
</script>

<style lang="scss" scoped></style>
