const User = require('../models/users');

exports.getUsers = (req,res,next)=>{
   
    User.findAll()
    .then(users => {
       res.json(users);
    })
    .catch(err => console.log(err));
 };

 exports.deleteUser = (req,res,next)=>{
   
    const id = req.params.UserId;
    
    User.findByPk(id)
    .then(user => {
        return user.destroy();
    })
    .then(result => {
        res.json({key:"successfully deleted"});
    })
    .catch((err)=>{
        console.log(err)
    })
 };

 exports.addUser = (req,res,next)=>{

    const name = req.body.Name;
    const email = req.body.Email;
    const mobile = req.body.Mobile
 
  User.create({
     name:name,
     email:email,
     phone:mobile
  })
  .then((result)=>{
     res.json(result);
  })
  .catch((err)=> console.log(err));
 };