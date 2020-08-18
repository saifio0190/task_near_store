const errorLog = require('../config/logger');
const dbconfig = require('../config/dbconfig').con;
const db = require("../Models/task");
const Detail = db.details;
const Op = db.Sequelize.Op;
const Sequelize= db.Sequelize;
const sequelize= db.sequelize;
// require('dotenv').config();// not using currently



// gets desired resuly machine round  
function getTaskResult(){
  
  var resultRes;
  var result = sequelize.query('select * from details tbl where( SELECT COUNT(*) FROM details tbl1 WHERE tbl1.grup = tbl.grup AND tbl1.age >= tbl.age AND tbl1.person >= tbl.person) <= 2 ORDER by person ASC', { type: Sequelize.QueryTypes.SELECT})
    .then(result => {
      var resultRes = {'status':1,'message':'success','data':result};
      return resultRes;
    })
    .catch(err => {
      var resultRes = {'status':0,'message':'failed','data':err};
      return resultRes;
    }); ;

     
 return result;
}

// fetch all the rows of details table
function getAllData(){

  const person = '';
  var resultRes;
  var condition = person ? { person: { [Op.like]: `%${person}%` } } : null;

  var result = Detail.findAll({ where: condition })
    .then(data => {
    var resultRes = {'status':1,'message':'success','data':data};
     return resultRes;
     
    })
    .catch(err => {
      var resultRes = {'status':0,'message':'failed','data':err};
     return resultRes;
    });
    return result;
}

var task = async function (req, res){
  var result = await getTaskResult();
  

  if (result) {

    var allData = await getAllData();

    res.render('welcome', {
            'data': allData,
            'result': result
        })
  }
     
    
}

var home = async function (req, res){


var result  = await getTaskResult();
var allData = await getAllData();
result.status=0;

  
   res.render('welcome', {
            'data': allData,
            'result': result
        })


  
}

// add new row
var addNew= function(req, res){
  
  if (!req.body.person || !req.body.grup || !req.body.age) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a row
  const detail = {
    person: req.body.person,
    grup: req.body.grup,
    age: req.body.age 
  };

  
  Detail.create(detail)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
}


// pure Myssql query

 // SELECT *
 // FROM(
 // SELECT *
 // FROM details
 // GROUP BY grup,person,age
 // ORDER BY age DESC
 //  LIMIT 2) as deta
 // ORDER BY person ASC
 // LIMIT 4



// SELECT person, grup, age
//    FROM
//      (SELECT person, grup, age, 
//                   @groups := IF(@current_group = grup, @groups + 1, 1) AS groups,
//                   @current_group := grup 
//        FROM details
//       GROUP BY age, grup
//       ORDER BY age desc, person asc
//      ) ranked
//    WHERE groups <= 2

// select grup,person,age
// From
// (
// Select grup,person,age
// from details
// Order by age desc,person asc limit 2 
// )as T
// group by groupps,person,age
// limit 4


// select *from details tbl
//    where
//     (
//    SELECT COUNT(*)
//    FROM details tbl1
//    WHERE tbl1.grup = tbl.grup AND
//         tbl1.age >= tbl.age
   
//    ) <= 2
//    ORDER by person ASC

module.exports  = {
  
  'home': home,
  'task': task,
  'addNew':addNew

};