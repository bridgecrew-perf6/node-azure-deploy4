const express = require('express')

const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Welcome to my app')
})

app.get('/about', (req, res) => {
  res.send('All about my app')
})

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`)
})