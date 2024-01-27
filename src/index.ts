import express from 'express'
import cors from 'cors'
import * as config from 'dotenv'

config.config()
const PORT = process.env.PORT

/** init application */
const app = express()
/** set cors policy for develop mode */
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello, Express with TypeScript and Webpack!')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
