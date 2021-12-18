fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        let div = document.createElement('div')
        div.classList.add('container')

        for (const userindex of users) {
            let divuser = document.createElement('div')
            divuser.classList.add('user')
            div.append(divuser)

            divuser.innerHTML =`
                <h1> Id: ${userindex.id} </h1>
                    <h2>Name: ${userindex.name}</h2>`
            let btn = document.createElement('button')

            btn.style.width = '200px'
            btn.style.height = '50px'
            btn.innerHTML = '<a href="../user/user-details.html" class="btn">Переход по ссылке</a>'
            divuser.append(btn)}
            document.body.append(div)})