import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => afterConnected())
.catch(err => console.error("❌ MongoDB connection error:", err));

const db = mongoose.connection;
db.on('error', (error) => console.error('❌ DB Error:', error));

function afterConnected() {
  console.log('✅ Connected to local MongoDB:', mongoose.connection.name);
}