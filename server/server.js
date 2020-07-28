const express = require('express');
const PORT = 5000;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(process.env.PORT || PORT, () => {
    console.log(`App listening on port ${PORT || process.env.PORT}`);
});