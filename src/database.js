import { Low, JSONFile } from 'lowdb'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

let db;
const __dirname = dirname(fileURLToPath(import.meta.url))

export async function createConnection() {
   const dataBaseFile = join(__dirname, '../db.json')
   const adapter = new JSONFile(dataBaseFile)
   db = new Low(adapter)

   // logica para que cree y no subcriba los datos
   await db.read()
   db.data ||= { tasks: [] }
   await db.write()
}

// export const mongoConnection = async () => {
//    try {
//       await mongoose.connect(process.env.URI_MONGO,
//          { useNewUrlParser: true, useUnifiedTopology: true }
//       )
//       console.log("Mongodb connected");
//    } catch (error) {
//       console.error(error);
//    }
// }

export const getConnection = () => db