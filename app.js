const express = require('express')
const app = express()

app.use(express.json())

const users = []


// HTTTP METHODS
// GET - Retreive Data
app.get('/', (request, response) => {
    response.send('welCome to the Main app ... 0x0 !!')
})
app.get('/hello', (req, res) => {
    res.send('hello world !!')
})
app.get('/users', (request, response) => {
   if(users.length == 0)
        response.status(404).send('no users Found !!')
    response.status(200).send(users)
})
// POST - Create data
app.post('/users', (request, response) => {

    const user = request.body;
    const findUser = users.find((x) => x.id === user.id);

    if(findUser){
        response.status(400).send('user Already exists ..')
        return
    }    
    console.log(user)
    users.push(user)
    response.status(201).send('created')
})
// PUT
    app.put('/users/:id', (req, res, next) => {
        const thing = new Thing({
          id: req.params.id,
          name: req.body.name
        });
        Thing.updateOne({id: req.params.id}, thing).then(
          () => {
            res.status(201).json({
              message: 'Thing updated successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      });
// DELETE
app.delete('/users/:id', (request, response) => {
    const {id} = request.params;
    console.log(request.params)
    const findUserIndex = users.findIndex((x) => x.id === id);
    if(findUserIndex == -1){
        response.status(400).send('user Not Found ..')
        return
    }
    //console.log(findUserIndex)
    users.splice(findUserIndex, 1)
    response.status(200).send('user deleted success ..')
})

app.listen(3001, () => {
    console.log('started on port 3001')
})