const express = require('express')
const path = require('path')
const db = require('./data/database')
const people = require('./data/people')


const app = express();
const PORT = '3000'


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set('view cache', true)
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded( { extended : true }));

app.use(express.json())

/* Get All */
app.get("/", (req, res) => {
    res.set('Cache-Control', 'public, max-age=600')
    res.render("index2", { people });
})


/* Get person by ID */
app.get("/person/:id", (req, res) => {
    let person = {};
    let memories = {};
    try{
        person = people.find((p) => p.id === parseInt(req.params.id));
        memories = db.get_memories_for_person(parseInt(req.params.id))
    }catch(error){
        console.error(error)
        res.redirect("index2")
    }

    if(!person) return res.status(404).render("404");
    res.render("person2", { person, memories })
})

/* Create person's memory */
app.post("/person/:id/memory", (req, res) => {
    const {author, text } = req.body

    db.add_memory({author, person_id : parseInt(req.params.id), text});
    res.redirect(`/person/${req.params.id}`);

});

/* Delete memory by ID */
app.delete("/person/:id/memory/:memory_id", (req, res) => {
    const response = db.delete_memory(req.params.memory_id);

    if(response.changes >= 1)
        return res.redirect(`/person/${req.params.id}`)

     return res.status(404).render("404");

})

/* Get all the memories */
app.get("/memories", (req, res) => {
    try{
        res.send(db.get_memories());
    }catch(error){
        console.error(error)
    }
})

app.get("/about", (req, res) => {
    res.set('Cashe-Control', 'public, max-age=600')
    res.render('about')
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});


