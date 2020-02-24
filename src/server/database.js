// var mysql = require('mysql');

// var con = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "avizivald1!",
  //   database: "mydb"
  // });
  
  // con.connect(function(err) {
    
    //   if (err) throw err;
    //   console.log("Connected!");
    //   var sql = "CREATE TABLE IF NOT EXISTS banot (name VARCHAR(255), address VARCHAR(255),tel VARCHAR(255), id VARCHAR(255),age VARCHAR(255), father VARCHAR(255),mam VARCHAR(255), chug VARCHAR(255),yeshiva VARCHAR(255), giv VARCHAR(255)) ";
    //   con.query(sql, function (err, result) {
      //     if (err) throw err;
      //     console.log("Table created");
      //   });
      // });
      
      
      /*script to create MySQL DB automatically */
      const makeDBConnection = require("./manageDB").makeDBConnection;
      let connection = makeDBConnection();

      var sql = `CREATE TABLE IF NOT EXISTS banot (name VARCHAR(255),address VARCHAR(255),tel VARCHAR(255),pid VARCHAR(255),age VARCHAR(255),father VARCHAR(255),mother VARCHAR(255),chug VARCHAR(255),yeshiva VARCHAR(255),gives VARCHAR(255))`;


  connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
      let tableName;
      const express = require("express");
      var app = express();
      let router = express.Router();
      
      var bodyParser = require('body-parser')
      
      
      app.use(bodyParser.urlencoded({ extended: true }));
      
      app.use(bodyParser.json()); 
      
app.listen(3309, function () {
  console.log('Example app listening on port 3000!');
});
app.post('/a', function (req, res) {
  console.log("req post=========>>>>>",req.body);
  console.log("ressssssssss post=========>>>>>",res);
  tableName = req.body.Gender =='female' ? 'banot':'bachurim';
  var clone = Object.assign({}, req.body);
delete clone.Gender;
console.log("clone clone clone ====>>>",clone);

const copy = [];
Object.values(clone).forEach(function(item){
  copy.push(`"${item}"`);
});
insertPersonToDB(tableName,Object.keys(clone),copy)
  res.send('POST request to the homepage')
})
app.get('/', function (req, res) {
  res.send('GET  request to the homepage')
})


// router.post("/createDB", (req, res) => {
//   console.log("create risk project");

//   let insertTBDb = req => {
//     let sendProject = req.body.projectName;
//     let id = req.body.projectId;
//     console.log("*****",sendProject,'==>',id,);
//     let table = `create table ${sendProject} (Version int PRIMARY KEY AUTO_INCREMENT,
//         projectId int DEFAULT ${id}, week int DEFAULT 1,myDate varChar (255) ,
//         ProbabilityTest int, ConcequenceTest int , MitigationTest varChar (255),ReasonTest varChar (255),ProbabilityBudget int ,
//         ConcequenceBudget int , MitigationBudget varChar (255) ,ReasonBudget varChar (255),ProbabilityDelay int,
//         ConcequenceDelay int,MitigationDelay varChar (255),ReasonDelay varChar (255),ProbabilityCustomer int,
//         ConcequenceCustomer int,MitigationCustomer varChar (255),ReasonCustomer varChar (255) ,ProbabilityOther1 int,
//         ConcequenceOther1 int, MitigationOther1 varChar (255) , ReasonOther1 varChar (255) ,ProbabilityOther2 int,
//         ConcequenceOther2 int, MitigationOther2 varChar (255) , ReasonOther2 varChar (255) ,totalRisk int NOT NULL DEFAULT 0, prevName1 varChar (255),
//         prevName2 varChar (255),risksLength int , lastWeek int )`;
//     return table;
//   };
//   const mysqlCreateTable = insertTBDb(req);

  // let createDb = `CREATE DATABASE IF NOT EXISTS ${riskdb}`

  
 let   insertPersonToDB=(table,sqlKeys,sqlValues)=>{
   
      let    sqlToInsert = `INSERT INTO ${table} (${sqlKeys}) VALUES (${sqlValues})`
      console.log("sqlToInsert      ===>>>",sqlToInsert);
      
        connection.query(sqlToInsert, (err, result, files, rows) => {
          if (err) {
            console.log("error query " + err);
            // res.status(500);
            // res.send("failed");
          } else {
            console.log("successCreate ",result);
            // res.status(201);
            // res.send("sucsess");
          }
        });
      }
     
      
//   connection.end();
// });
module.exports = router;
