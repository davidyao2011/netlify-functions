const fetchUsers = async() => {
    return (
        await (await fetch('http://localhost:9000'))
    )
}