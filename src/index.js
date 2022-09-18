
import app from './app.js'
import {createConnection} from './database.js'

createConnection()
app.listen(app.get('port'))

console.log(`Server i srunning on port ${app.get('port')}`)