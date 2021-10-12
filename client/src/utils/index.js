export const clickOutside = {
   beforeMount: (el, binding) => {
      el.clickOutsideEvent = (event) => {
         if (!(el == event.target || el.contains(event.target))) {
            binding.value()
         }
      }
      document.addEventListener('click', el.clickOutsideEvent)
   },
   unmounted: (el) => {
      document.removeEventListener('click', el.clickOutsideEvent)
   },
}

export const constructTableData = (employees, items) => {
   const tableData = []

   for (let employee of employees) {
      const { id, name, surname } = employee
      const matchedItems = []

      for (let item of items) {
         if (item.employee_id === id) {
            matchedItems.push(item)
         }
      }

      const rowData = {
         id,
         name,
         surname,
         itemCount: matchedItems.length,
         totalPrice: calculateTotalPrice(matchedItems),
      }

      tableData.push(rowData)
   }

   return tableData
}

export const getEmployeeItemsData = (employee, items) => {
   const employeeItems = []

   for (let item of items) {
      if (item.employee_id === employee.id) {
         employeeItems.push(item)
      }
   }
   return employeeItems
}

function calculateTotalPrice(arr) {
   let sum = 0

   for (let item of arr) {
      sum += item.price
   }

   return sum
}
