const db = require('../db')

const getEmployees = async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM employees;')
      res.status(200).json(result.rows)
   } catch (e) {
      console.log('Error ocurred: ', e)
   }
}

module.exports = {
   getEmployees,
}
