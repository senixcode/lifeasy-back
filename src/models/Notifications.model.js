import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema({
    name: String,
    categories: Number,
    description: String,
    alert: Date,
},{
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
})

  export default mongoose.model("Notifications", notificationSchema)