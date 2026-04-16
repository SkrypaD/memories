const Database = require('better-sqlite3')
const path = require('path')


const db = new Database(path.join(__dirname, 'app.db'))

db.exec(`
    CREATE TABLE IF NOT EXISTS memories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    person_id INT NOT NULL,
    author TEXT NOT NULL,
    text TEXT,
    created_at TEXT NOT NULL DEFAULT (strftime('%d.%m.%Y', 'now'))
    )
`);


function add_memory({author, person_id, text}){
    date_created = new Date().toLocaleDateString('uk-UA');
    try{
    db.prepare(`
        INSERT INTO memories (author, person_id, text, created_at)
        VALUES (?, ?, ?, ?)
    `).run(author, person_id, text, date_created)
    }catch(error){
        console.error(error)
    }
}

function delete_memory(id){
    try{
        return db.prepare(`
            DELETE FROM memories WHERE id = ?`
        ).run(id)
    }catch(error){
        console.error(error)
    }
}

function get_memories(){
    try{
        return db.prepare(`SELECT * FROM memories;`).all();
    }catch(error){
        console.error(error)
    }
    return null;
}

function get_memories_for_person(person_id){
    try{
        return db.prepare("SELECT * FROM memories WHERE person_id = ?;").all(person_id);
    }catch(error){
        console.error(error)
    }
}

module.exports = {
    db,
    add_memory,
    delete_memory,
    get_memories_for_person,
    get_memories
};