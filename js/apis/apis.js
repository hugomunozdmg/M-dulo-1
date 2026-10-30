fetch("https://api.chucknorris.io/jokes/random").then((res) => {
    return res.json()
}).then((data) => {
    document.getElementById("content").innerHTML = `
    <p>Broma: ${data.value}</p>
    `
})

