const express= require('express')
const dbConnect =require('./dbconnect')
const app = express()
const port = 3000

app.use(express.json())
const userRoute = require('./routes/usersRoute')

app.use('/api/users/',userRoute)

app.get('/',(req, res)=> res.send('hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
