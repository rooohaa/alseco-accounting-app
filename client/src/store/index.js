import { createStore } from 'vuex'
import { constructTableData } from '../utils'

export default createStore({
   state: {
      employees: [],
      items: [],
      sortByValue: '',
      currentPage: 1,
      rowsPerPage: 10,
   },
   mutations: {
      setEmployees(state, payload) {
         state.employees = payload
      },
      removeEmployee(state, payload) {
         state.employees = state.employees.filter(
            (emp) => emp.id !== payload.id
         )
      },
      removeItem(state, payload) {
         state.items = state.items.filter((el) => el.id !== payload.id)
      },
      addEmployee(state, payload) {
         state.employees.push(payload)
      },
      addItem(state, payload) {
         state.items.push(payload)
      },
      setItems(state, payload) {
         state.items = payload
      },
      mergeItems(state, payload) {
         state.items = [...state.items, ...payload]
      },
      setSortValue(state, payload) {
         state.sortByValue = payload
      },
      setCurrentPage(state, payload) {
         state.currentPage = payload
      },
   },
   actions: {
      async getEmployees(context) {
         try {
            const res = await fetch('http://localhost:8000/api/employees')
            const data = await res.json()

            context.commit('setEmployees', data)
         } catch (error) {}
      },
      async getMaterialItems(context) {
         try {
            const res = await fetch('http://localhost:8000/api/items')
            const data = await res.json()

            context.commit('setItems', data)
         } catch (error) {}
      },
      async deleteEmployee(context, payload) {
         try {
            const res = await fetch(
               `http://localhost:8000/api/employees/${payload}`,
               {
                  method: 'DELETE',
               }
            )

            const data = await res.json()

            context.commit('removeEmployee', data)
         } catch (error) {}
      },
      async postNewEmployee(context, payload) {
         try {
            const res = await fetch('http://localhost:8000/api/employees', {
               method: 'POST',
               body: JSON.stringify(payload),
               headers: {
                  'Content-type': 'application/json',
               },
            })
            const data = await res.json()

            context.commit('addEmployee', data.employee)
            context.commit('mergeItems', data.items)
         } catch (error) {}
      },
      async addNewItem(context, payload) {
         try {
            const res = await fetch('http://localhost:8000/api/items', {
               method: 'POST',
               body: JSON.stringify(payload),
               headers: {
                  'Content-type': 'application/json',
               },
            })

            const data = await res.json()

            context.commit('addItem', data)
         } catch (error) {}
      },
      async deleteItem(context, payload) {
         try {
            const res = await fetch(
               `http://localhost:8000/api/items/${payload}`,
               {
                  method: 'DELETE',
               }
            )

            const data = await res.json()

            context.commit('removeItem', data)
         } catch (error) {}
      },
   },
   getters: {
      tableData(state) {
         let tableData = constructTableData(state.employees, state.items)

         switch (state.sortByValue) {
            case 'itemCount':
               return tableData.sort((a, b) => b.itemCount - a.itemCount)
            case 'totalPrice':
               return tableData.sort((a, b) => b.totalPrice - a.totalPrice)
            case 'fullName':
               tableData.sort((a, b) => a.surname.localeCompare(b.surname))
            default:
               return tableData
         }
      },
      currentTableRows(state, getters) {
         const lastIndex = state.currentPage * state.rowsPerPage
         const startIndex = lastIndex - state.rowsPerPage

         const currentRows = getters.tableData.slice(startIndex, lastIndex)

         return currentRows
      },
      currentTableRowsLength(state, getters) {
         return getters.currentTableRows.length
      },
   },
})
