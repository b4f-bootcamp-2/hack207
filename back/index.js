const express = require('express')
const app = express()
const PORT = 3001
const route  = require('./Routers/router')

// Ao colocar essa rota na URL vai para a nossa pasta /Routes/todo
app.use('/',route);  

// *** Todo o Code tem q ser rodado antes desse Code !!***
app.listen(PORT, () => {
  console.log('Ligado a por http://localhost:'+ PORT)
})