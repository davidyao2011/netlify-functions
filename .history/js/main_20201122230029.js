const fetchUsers = async() => {
    return (
        await (await fetch('http://localhost:9000/getUsers')).json()
    )
}

fetchUsers.then(data => {
    useList = document.querySle
})