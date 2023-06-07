const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Dream@123',
    database : 'organisation'
});
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected...');
}
);
//funtion to get all employee details
app.get('/employee', (req, res) => {
    let sql = 'SELECT * FROM employee where isActive=1';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
}
);
//get employee from employee table by id with all columns columns names are empaname,age, gender,address,contactnumber with all way of get method


app.get('/employee/:id', (req, res) => {
    let sql = 'SELECT * FROM employee WHERE empid = ?';
    let query = db.query(sql, [req.params.id], (err, result) => {
        if(err) throw err;
        res.json(result);
    });
}
);




//create employee into database organisation table employee with post method column empaname,age, gender,address,contactnumber
app.post('/createemployee', (req, res) => {
    // alternative way to insert data into database
    let sql = 'INSERT INTO employee SET empname = ?, age = ?, gender = ?, address = ?, contactnumber = ?';
    //varible to store body data
    let data=[
        req.body.empname,
        req.body.age,
        req.body.gender,
        req.body.address,
        req.body.contactnumber
    ]     
    let query = db.query(sql,data, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.json('Employee added...');
    });
    }
    );

// delete function update of isactive column isequalto 0 in employee table with put method
app.put('/deleteEmployee', (req, res) => {
    let newemp = req.body;
    let sql = 'UPDATE employee SET isactive = ? WHERE empid = ?';
    let query = db.query(sql, [0, req.body.id], (err, result) => {
        if(err) console.log(err);
        res.json(result);
    });
}
);


//update employee details in employee table using put method
app.put('/updateEmployee', (req, res) => {
    let newemp = req.body;
    //alternative way to update data into database
    let sql = 'UPDATE employee SET ? WHERE empid = ?';
    let query = db.query(sql, [newemp, req.body.empid], (err, result) => {
        if(err) console.log(err);
        res.json(result);
    });
}
);

 




//port to listen
app.listen('4000', () => {
    console.log('Server started on port 4000');
}
);



