var user = 'jpirees'

var userMock = fetch(`https://api.github.com/users/${user}`, {
    headers: { "Accept": "application/vnd.github.v3+json" }
})
    .then(response => response.json())
    .then(data => data)

export default userMock;



