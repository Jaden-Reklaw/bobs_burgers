const express = require('express');

const employee = require('./routes/employee.router');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/employee', employee);

app.listen(process.env.PORT || PORT, () => {
    console.log(`App listening on port ${PORT || process.env.PORT}`);
});