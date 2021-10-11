const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')

const employeesRoutes = require('./routes/employee-routes')
const itemsRoutes = require('./routes/material-items-routes')

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api', employeesRoutes)
app.use('/api', itemsRoutes)

app.listen(PORT, () => {
   console.log('Server is running on port: ', PORT)
})
