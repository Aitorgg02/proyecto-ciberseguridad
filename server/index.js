const express = require('express');
const cors = require('cors');
const app = express();

require('./database');
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));


app.use('/api',require('./routes/index'));

app.listen(3000);
console.log('servidor en el puerto',3000);


