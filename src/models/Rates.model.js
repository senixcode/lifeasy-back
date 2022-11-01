import mongoose from 'mongoose'
import { Rates } from '../const/models.const.js'

const TypesSchema = new mongoose.Schema({
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
    description: String,
},{
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
})

  export default mongoose.model(Rates, TypesSchema)