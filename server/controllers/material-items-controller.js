const db = require('../db')

const getMaterialItems = async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM material_items;')
      res.status(200).json(result.rows)
   } catch (e) {
      console.log('Error ocurred: ', e)
   }
}

module.exports = {
   getMaterialItems,
}
