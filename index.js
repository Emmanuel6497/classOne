const express =require('express');
const app = express();
const port = 4200;
const students = [

    
    
{
    id: 1,
    name: 'Emma',
    age: 15,
    course: 'software Engineering',
},
                                                                                                                   
{
    id: 2,
    name: 'Joe',
    age: 17,
    course: 'Mathematics',
},

{
    id: 3,
    name: 'Brandon',
    age: 15,
    course: 'Cyber Security',
},

{
    id: 1,
    name: 'Emma',
    age: 15,
    course: 'software Engineering',
},
                                                                                                                   
{
    id: 2,
    name: 'Joe',
    age: 17,
    course: 'Mathematics',
},

{
    id: 3,
    name: 'Brandon',
    age: 15,
    course: 'Cyber Security',
},

]

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
app.get('/', (req, res) => {
    // res.send('Welcome to my Express Server!');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/indexedDB.html');
    // console.log(__dirname);
})

app.get('/api', (req,res) => {
    res.json(students);
});

app.listen(port, () => {
    console.log(`server is running port ${port}`);
})
