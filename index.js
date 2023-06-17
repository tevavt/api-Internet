const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express()


app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)


app.get('/', (req, res) => {
    console.log('hi')
    res.send('hello world')
})



app.get('/attraction', (req, res) => {
    connection.query(
        'SELECT * FROM tbapi',
        function(err , results, fields){
            console.log(results)
            res.send(results)
        }
    )
})

app.listen(process.env.PORT || 3000)


 
// app.listen(5000, function () {
//   console.log('CORS-enabled web server listening on port 5000')
// })