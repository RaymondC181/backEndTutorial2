const express = require('express');
const app = express();
app.use(express.JSON);

app.get('/', (req, res)=>
{
    res.send('Hello there');
});

const courses = [
    {id:1, name:'Web Development'}, 
    {id:2, name:'IT'}, 
    {id:3, name:'Cybersecurity'},
];

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req,res)=>
{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course)
    {
        res.status(404).send("The course with the given ID was not found");
        return 
    }
        res.send(course);
});

//HTTP POST Requests

app.post('/api/courses', (req, res)=> {

//you write the if code here
//add an if statment so that the name of the course you post is min(3) characters
if(course.length>=3)
{
    const courses = {
        //we assign an ID and a name property
        id:courses.length + 1,
        name:req.body.name
    }
}
        // YOU WRITE THE NEXT LINES OF CODE
        //next step: push it to the array
        courses.push(req);
        //next step: the server should return the new resource to the client in the body of the response 
        res.send(courses);
});

app.listen(3000, () => {
    console.log('Listening on port 3000 ...')
})

//here we need the specific id of the course we want to update 
app.put('/api/courses/:id', (req, res)=> {
    //write code in order to look up the course, if not existing, return a 404
    if(courses.indexOf(id)<0)
    {
        return "404"; 
    }

    //otherwise
    else{
        //update the course
        courses = courses; 
        //return the updated course  
        return courses; 
    }
}); 

app.delete('/api/courses/:id', (req, res)=>{
    //code the following logic
    
    //look up the course by id
    var result = $.grep(courses, function(req){ return req.id == id; });
    if(result.length === 0){
        return "404"; 
    }
    else{
        var index = list.map(x => {
            return x.Id;
          }).indexOf(id);
          
          list.splice(index, 1);
          return "course is deleted"; 
    }
        //return the 404 if does not exist
        //delete the course by index HINT: use the indexOf() and 
        //splice() methods
        //return the response to the client the course that was deleted

});