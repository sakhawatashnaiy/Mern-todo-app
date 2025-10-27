 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 require('dotenv').config();

 const taskRoutes = require('./routes/taskRoutes');

 const app = express();
 app.use(cors({
   origin: [
    "http://localhost:5173",
       "https://boisterous-pudding-12e56c.netlify.app/",
      ],
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials : true
 }));
 app.use(express.json());

 mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log('✅ MongoDB Connected successfully!'))
   .catch(err => console.log('❌ Mongo Error:', err));

 app.use('/api/tasks', taskRoutes);

  app.get('/', (req, res) => {
    res.send('Server is running 🚀');
  });

 const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

