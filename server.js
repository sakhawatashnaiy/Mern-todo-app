 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 require('dotenv').config();

 const taskRoutes = require('./routes/taskRoutes');

 const app = express();
 app.use(cors({
   origin: "http://localhost:5173",
   methods: ["GET", "POST", "PUT", "DELETE"],
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



//     //  comented code
//    const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// const FILE_PATH = './data/tasks.json';

// // Helper to read file
// const readTasks = () => {
//   const data = fs.readFileSync(FILE_PATH);
//   return JSON.parse(data);
// };

// Helper to write file
// const writeTasks = (tasks) => {
//   fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
// };

// // GET all tasks
// app.get('/api/tasks', (req, res) => {
//   const tasks = readTasks();
//   res.json(tasks);
// });

// // POST add task
// app.post('/api/tasks', (req, res) => {
//   const tasks = readTasks();
//   const newTask = {
//     id: Date.now(),
//     title: req.body.title,
//     completed: false,
//   };
//   tasks.push(newTask);
//   writeTasks(tasks);
//   res.status(201).json(newTask);
// });

// // PATCH toggle complete
// app.patch('/api/tasks/:id', (req, res) => {
//   let tasks = readTasks();
//   tasks = tasks.map((task) =>
//     task.id === Number(req.params.id)
//       ? { ...task, completed: !task.completed }
//       : task
//   );
//   writeTasks(tasks);
//   res.json({ message: 'Updated' });
// });

// // DELETE
// app.delete('/api/tasks/:id', (req, res) => {
//   const tasks = readTasks().filter(
//     (task) => task.id !== Number(req.params.id)
//   );
//   writeTasks(tasks);
//   res.json({ message: 'Deleted' });
// });

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));
