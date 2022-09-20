import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import taskRoute from './routes/detail.route.js'
import cors from 'cors'
import { PORT } from './config.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.set('port', PORT)
app.use(taskRoute)
export default app