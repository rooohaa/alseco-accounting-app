const db = require('../db')

const getEmployees = async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM employees;')
      res.status(200).json(result.rows)
   } catch (e) {
      console.log('Error ocurred: ', e)
   }
}

const deleteEmployee = async (req, res) => {
   const employeeId = req.params.id

   try {
      const result = await db.query(
         'DELETE FROM employees WHERE id = $1 RETURNING *;',
         [employeeId]
      )
      res.status(200).json(result.rows[0])
   } catch (e) {}
}

const postEmployee = async (req, res) => {
   const { name, surname, items } = req.body

   try {
      const result = await db.query(
         'INSERT INTO employees (name, surname) VALUES ($1, $2) RETURNING *;',
         [name, surname]
      )
      const insertedEmployee = result.rows[0]
      const insertedItems = []

      for (let i = 0; i < items.length; i++) {
         const res = await db.query(
            'INSERT INTO material_items (title, price, employee_id) VALUES ($1, $2, $3) RETURNING *;',
            [items[i].title, items[i].price, insertedEmployee.id]
         )

         const insertedItem = res.rows[0]

         insertedItems.push(insertedItem)
      }

      res.json({ employee: insertedEmployee, items: insertedItems })
   } catch (e) {}
}

module.exports = {
   postEmployee,
   getEmployees,
   deleteEmployee,
}
