import mongoose from 'mongoose'

export async function getStartMongoDB() {
   const MONGODB_URI = process.env.MONGODB_URI 
   await mongoose.connect(MONGODB_URI).then(data => {
      console.log("mongodb running:", MONGODB_URI);
   })
 }