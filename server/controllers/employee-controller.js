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

module.exports = {
   getEmployees,
   deleteEmployee,
}
