const e = require('express')
const express = require('express')

const router = express.Router()

const path = require('path')

const blogs = require('../data/blogs.js')


// router.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../templates/index.html'))
// })

// router.get('/blog',(req,res)=>{
//     blogs.forEach(e => {
//         console.log(e.title)
//     });
//     res.sendFile(path.join(__dirname,'../templates/index.html'))
// })


router.get('/', (req, res) => {
    res.render('home')
})
router.get('/blog', (req, res) => {
    blz = blogs
    res.render('blog',{
        blogs : blz
    })
})

router.get('/blog/:slug', (req, res) => {
    blz = blogs.filter(
        (e)=>{
            return e.slug == req.params.slug
        }
    )

    res.render('blogpost',{
        blogs : blz
    })
})



router.get('/blogpost/:slug', (req, res) => {
    blogz = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    console.log(blogz)
    res.send(blogz)
})
module.exports = router