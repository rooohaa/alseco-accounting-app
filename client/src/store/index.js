import { createStore } from 'vuex'
import { constructTableData } from '../utils'

export default createStore({
   state: {
      employees: [],
      items: [],
   },
   mutations: {
      setEmployees(state, payload) {
         state.employees = payload
      },
      setItems(state, payload) {
         state.items = payload
      },
      removeEmployee(state, payload) {
         state.employees = state.employees.filter(
            (emp) => emp.id !== payload.id
         )
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
   },
   getters: {
      tableData(state) {
         return constructTableData(state.employees, state.items)
      },
   },
})
