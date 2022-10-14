var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const studentModel = require('../models/student.model')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', function(req, res, next) {
    // console.log(req.body);
    // let newStudent = new studentModel({
    //     firstName :  req.body.fname,
    //     lastName :  req.body.lname,
    //     age :  req.body.age,
    //     dob :  req.body.dob
    // });

    // newStudent.save(function(err,newStudent){
    //     if(err){
    //         res.send('FAILED');
    //     }
    //     else{
    //         res.send(['User added success!!!!',newStudent]);
    //     }
    // });

    res.send('ON studetns page')

  });
  

module.exports = router;
