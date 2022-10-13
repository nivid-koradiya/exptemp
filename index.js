const express = require('express')
const exphbs  = require('express-handlebars')

const app = express()

const port = 3000


const path = require('path')


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// const harrymiddle = (req,res,next)=>{
//     console.log(req)

// }

// app.use(express.static(path.join(__dirname, 'public')))

app.use('/',require(path.join(__dirname,'routes/blog.js')))

// // app.use(harrymiddle)

// app.get('/hello/:name',(req,res) => {
//     res.send(`${req.params.name}`)
// })

// // app.get('/hello/:name', (req, res) => {
// //     // res.sendFile()
    
// // })


// app.get('/xx', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })



app.listen(port, () => {
    console.log(`Listining on port ${port}`)
})