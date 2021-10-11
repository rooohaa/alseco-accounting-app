const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
   res.json({ message: 'Hi there :)' })
})

app.listen(PORT, () => {
   console.log('Server is running on port: ', PORT)
})
