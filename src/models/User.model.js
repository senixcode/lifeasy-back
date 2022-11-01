import mongoose from 'mongoose'
import { Users } from '../const/models.const.js'

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
},{
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
})

  export default mongoose.model(Users, UsersSchema)