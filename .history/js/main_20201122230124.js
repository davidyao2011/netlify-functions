const fetchUsers = async() => {
    return (
        await (await fetch('http://localhost:9000/getUsers')).json()
    )
}

fetchUsers.then(data => {
    useList = document.querySelector('#users');
    data.forEach(user => {
        const li = document.createElement('li')
        li.className = 'list-group-item'
    })
})