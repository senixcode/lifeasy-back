import mongoose from 'mongoose'


const DetailSchema = new mongoose.Schema({
    type: String,
    name: String,
    level: Number,
    amount: Number, 
    quantity: String,
    description: String,
    alert:  String,
    date: Date,
},{
    timestamps: true,
})

export default mongoose.model("Details", DetailSchema)