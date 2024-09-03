const express = require('express');
const interviewRoutes = require('./routes/interviewRoutes');

const app = express();

app.use(express.json());
app.use('/api/interview', interviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
