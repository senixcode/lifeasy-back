
import app from './app.js'
import { getStartMongoDB} from './database.js'

getStartMongoDB().catch(err => console.log(err));

app.listen(app.get('port'))

console.log(`Server i srunning on port ${app.get('port')}`)