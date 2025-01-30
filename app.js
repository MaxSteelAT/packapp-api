require('dotenv').config();
console.log('Hello')
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);
// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});