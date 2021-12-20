fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        let div = document.createElement('div')
        div.classList.add('container')

        for (const userindex of users) {
            let divuser = document.createElement('div')
            divuser.classList.add('user')


            divuser.innerHTML =`
                <h1> Id: ${userindex.id} </h1>
                    <h2>Name: ${userindex.name}</h2>`

            let detailslink = document.createElement('a')
            detailslink.classList.add('button')
            detailslink.innerHTML = `<h2>Деталі юзера</h2>`
            detailslink.href = '../user/user-details.html?id=' + userindex.id

            div.append(divuser)
            divuser.append(detailslink)}
        document.body.append(div)}
    )