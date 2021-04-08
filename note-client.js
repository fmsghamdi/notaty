const baseUrl = "https://faisal-notaty.herokuapp.com";

async function addNote(noteData) {
    const respons = await fetch(`${baseUrl}/notes`, {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(noteData)
    });
    return respons;
}

async function updateNote(noteData) {
    const respons = await fetch(`${baseUrl}/notes`, {
        method: "PUT",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(noteData)
    });
    return respons;
}

async function deleteNote(noteId) {
    const respons = await fetch(`${baseUrl}/notes/${noteId}`, {
        method: "DELETE"
    });
    return respons;
}

async function getNoteById(noteId) {
    const respons = await fetch(`${baseUrl}/notes/${noteId}`);
    return respons.json();
}

async function getNotes(noteTitle) {
    let url = `${baseUrl}/notes`;
    if(noteTitle){
        url += `/?title=${noteTitle}`;
    }
    const respons = await fetch(url);
    return respons.json();
}