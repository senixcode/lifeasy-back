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
   db.data ||= { tasks: [], reports: [], }
   await db.write()
}

export const getConnection = () => db