import express from 'express'
import morgan from 'morgan'
import taskRoute from './routes/detail.route.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.set('port', process.env.PORT || 3001)
app.use(taskRoute)

export default app