import users from "./data.js"

window.addEventListener("keydown", showKey)

document.getElementById("my-input").addEventListener("input", search)

let usersHtml = document.getElementById("users-list")

function search(event) {
    let value = event.target.value
    usersHtml.innerHTML = ""
    for (let user = 0; user < users.length; user++) {
        if ((users[user].name.toLowerCase().includes(value) ||
            users[user].username.toLowerCase().includes(value)) &&
            value != ""
        ) {
            usersHtml.innerHTML += `
                    <div>
                        <h4>${users[user].name}</h4>
                        <p>${users[user].username}</p>
                    </div>
                    `
        }
    }
}


function showKey(event) {
    if (event.key == "f") console.log("hola")
    if (event.key == "d") console.log("adios")
}