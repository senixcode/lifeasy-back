import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import RateRoute from './routes/rate.route.js'
import CategoryRoute from './routes/category.route.js'
import EntriesRoute from './routes/entries.route.js'
import DetailRoute from './routes/detail.route.js'

import cors from 'cors'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.set('port', process.env.PORT)

//ROUTES
app.use("/api/rate", RateRoute)
app.use("/api/category", CategoryRoute)
app.use("/api/entries", EntriesRoute)
app.use("/api/details", DetailRoute)

export default app