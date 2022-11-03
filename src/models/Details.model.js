import mongoose from 'mongoose'
import { Categories, Details, Rates } from '../const/models.const.js'

const DetailSchema = new mongoose.Schema({
  name: String,
  rates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Rates
  }],
  mount: Number,
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Categories
  }],
  description: String,
}, {
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
})

DetailSchema.post('find', async function (docs) {
  for (let doc of docs) {
    if (doc?.rates.length >= 1) await doc.populate('rates')
    if (doc?.categories.length >= 1) await doc.populate('categories')
  }
})

export default mongoose.model(Details, DetailSchema)