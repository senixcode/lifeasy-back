import mongoose from 'mongoose'
import { Categories, Details, Types } from '../const/models.const.js'

const DetailSchema = new mongoose.Schema({
  name: String,
  rates: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: Types
  }],
  mount: Number,
  categories:  [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: Categories
  }],
  description: String,
},{
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
})

  export default mongoose.model(Details, DetailSchema)