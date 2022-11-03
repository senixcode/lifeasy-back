import mongoose from 'mongoose'
import { Categories, Details, Entries, Rates } from '../const/models.const.js'

const EntriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Rates
  }],
  mount: Number,
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Categories
  }],
  details: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Details
  }],
  description: String,
}, {
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
})

EntriesSchema.post('find', async function (docs) {
  for (let doc of docs) {
    if (doc?.rates.length >= 1) await doc.populate('rates')
    if (doc?.categories.length >= 1) await doc.populate('categories')
    if (doc?.details.length >= 1) await doc.populate('details')
  }
})

export default mongoose.model(Entries, EntriesSchema)