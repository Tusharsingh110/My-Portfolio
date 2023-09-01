const connectToMongo = require('./db')
const express = require('express')
connectToMongo();

const app = express();
const port = 3000;

// app.get('/',(req,res)=> {
//     res.send('Hello World')
// })
app.use(express.json());

app.use('/api/Testing', require('./routes/Testing'))


app.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
})