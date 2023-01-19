const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app-vulnerabilidades',{

})
    .then(db=>console.log('base de datos conectada'))
    .catch(err=>console.log('error'))

