
import app from './app.js'
import {createConnection, mongoConnection} from './database.js'

mongoConnection()
createConnection()

app.listen(app.get('port'))

console.log(`Server i srunning on port ${app.get('port')}`)