  let users = [
            { name: "Jose", username: "josepro3000" },
            { name: "Maria", username: "maria_dev01" },
            { name: "Carlos", username: "carlos2005" },
            { name: "ana", username: "ana_gamer" },
            { name: "lucas", username: "lucaspro99" }
        ]

        let usersHtml = document.getElementById("users-list")

        function search() {
            let value = document.getElementById("my-input").value.toLowerCase()
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
