const db = require('../db')

const getMaterialItems = async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM material_items;')
      res.status(200).json(result.rows)
   } catch (e) {
      console.log('Error ocurred: ', e)
   }
}

const postItem = async (req, res) => {
   const { title, price, employee_id } = req.body

   try {
      const result = await db.query(
         'INSERT INTO material_items (title, price, employee_id) VALUES ($1, $2, $3) RETURNING *;',
         [title, price, employee_id]
      )

      res.status(201).json(result.rows[0])
   } catch (e) {
      console.log('Error ocurred: ', e)
   }
}

const deleteItem = async (req, res) => {
   const { id } = req.params

   try {
      const result = await db.query(
         'DELETE FROM material_items WHERE id = $1 RETURNING *;',
         [id]
      )
      res.status(200).json(result.rows[0])
   } catch (e) {
      console.log('Error ocurred: ', e)
   }
}

module.exports = {
   getMaterialItems,
   postItem,
   deleteItem,
}
