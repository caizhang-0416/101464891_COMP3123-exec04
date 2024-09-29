const express = require('express');
const app = express();
const SERVER_PORT = 3000; 

// Middleware to parse JSON bodies (if you plan to handle JSON data)
app.use(express.json());

// GET
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>'); 
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>'); 
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1>'); 
});

// GET - Hello
app.get('/hello', (req, res) => {
    res.status(200);
    res.send('<h1>GET - Hello World</h1>'); 
});

// POST - Hello
app.post('/hello', (req, res) => {
    res.status(201);
    res.send('<h1>POST - Hello World</h1>'); 
});

// POST - Contact
app.post('/contact', (req, res) => {
    res.send('<h1>POST - Contact Us</h1>'); 
});

// PUT - Hello
app.put('/hello', (req, res) => {
    res.send('<h1>Hello World Updated!</h1>'); 
});

// DELETE - Hello
app.delete('/hello', (req, res) => {
    res.send('<h1>Delete - Hello World</h1>'); 
});

// GET - Student
app.get('/student', (req, res) => {
    res.status(200)

    const stud = {
        name: 'Cai Zhang', 
        age: 25,
    };
    res.status(200).json(stud); 
});

// GET EMPLOYEE

app.get('/employee', (req, res) => {
    console(req.query)

    const fnm =req.query.fnm;
    const lnm = req.query.lnm;
    res.send('First Name:${fnm},Last Name:${lnm}');
    res.status(200)

    res.status(200).json(stud); 
});
//http://localhost:3000/employee/pritesh/patel/toronto
app.get('/employee/:fnm/:lnm/:city',(req,res)=>{
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const city = req.params.city;
    res.send('First Name:${fnm},last name :${lnm},City:${city}')

})
    

// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
