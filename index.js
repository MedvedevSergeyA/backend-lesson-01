const yargs = require('yargs')
const {addNote, printNotes, removeNotes} = require('./notes.controller')

yargs.command({
    command: "add",
    describe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "Note title",
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title)
    }
})
yargs.command({
    command: "list",
    describe: "Print all notes",
   async handler() {
         printNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note by id',
    handler({id}) {
        removeNotes(id)
    }
})

yargs.parse()