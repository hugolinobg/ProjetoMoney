import express from 'express'
import cors from 'cors'

import routes from './src/routes/routes.js'

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3300

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
  // mongoDb().catch((err) => console.log(err))
  console.log(`Server running on the port: ${port}`)
})
