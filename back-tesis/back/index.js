import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import routes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/usuarios', routes)

try {
  await db.sync()
  await db.authenticate() 
  console.log('Conectado a la BD')
} catch (error) {
  console.log(`El error de conexion es: ${error}`)
}


app.listen(3001, () => {
  console.log('Server is up on port http://localhost:3001/')
})
