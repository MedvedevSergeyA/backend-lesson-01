const express = require('express')
const chalk = require('chalk')
const path = require('path')
const { addNote, getNotes, removeNotes, editNotes} = require('./notes.controller')


const port = 2000



const app = express()

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.static(path.resolve(__dirname, "public")))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})

app.post('/', async (req, res) => {
    await addNote(req.body.title)
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: true

    })

})

app.delete('/:id', async (req, res) => {
    await removeNotes(req.params.id)
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})

app.put('/:id', async (req, res) => {
    console.log(req.body.note)
    const text = await req.body.note
    await editNotes( req.params.id, text)

    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})


app.listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`))
} )