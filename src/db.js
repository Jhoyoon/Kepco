import mongoose from "mongoose" 

mongoose.connect('mongodb+srv://cluster0.4dkqkhr.mongodb.net/" --apiVersion 1 --username junghoyoon505_db_user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));
const db = mongoose.connection;
db.on('error',(error) => console.log('Connected to DB',error));
// db.once('open',() => console.log('두번쨰임'));