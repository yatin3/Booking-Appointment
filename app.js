const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

const sequelize = require('./util/database');

const User = require('./models/users');

const adminRoute = require('./routes/admin');

app.use(cors());

app.use(bodyParser.json());

app.use('/',adminRoute);
 

// app.get('/',(req,res,next)=>{
   
//    User.findAll()
//    .then(users => {
//       res.json(users);
//    })
//    .catch(err => console.log(err))
// });

// app.post('/addBooking',(req,res,next)=>{

//    const name = req.body.Name;
//    const email = req.body.Email;
//    const mobile = req.body.Mobile

//  User.create({
//     name:name,
//     email:email,
//     phone:mobile
//  })
//  .then((result)=>{
//     console.log("successfull");
//  })
//  .catch((err)=> console.log(err));
// });


sequelize.sync()
.then(m => app.listen(3000))
.catch(err => console.log(err));


