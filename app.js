const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.listen(PORT, console.log(`The is running on port ${PORT}`))