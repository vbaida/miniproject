fetch('https://jsonplaceholder.typicode.com/users/' )
    .then(response => response.json())
    .then(users => {
        let div = document.createElement('div')
        div.classList.add('container')
        for (const user of users) {

                let divuser = document.createElement('div');
                divuser.classList.add('post');
                div.append(divuser)
                divuser.innerHTML = `
                            <h1>Id: ${user.id}</h1>
                            <h3>Username: ${user.username} </h3>
                            <h5>Email: ${user.email}</h5>
                            <h5>Street: ${user.address.street}</h5>
                            <h5>Suite: ${user.address.suite}</h5>
                            <h5>City: ${user.address.city}</h5>
                            <h5>Zipcode: ${user.address.zipcode}</h5>
                            <h5>Lat: ${user.address.geo.lat}</h5>
                            <h5>Lng: ${user.address.geo.lng}</h5>
                            <h5>Phone: ${user.phone}</h5>
                            <h5>Website: ${user.website}</h5>
                            <h5>Companyname: ${user.company.name}</h5>
                            <h5>CompanycatchPhrasee: ${user.company.catchPhrase}</h5>
                            <h5>Companybs: ${user.company.bs}</h5>`
                let btn = document.createElement('button')

                btn.style.width = '200px'
                btn.style.height = '50px'
                btn.innerHTML = `<h3>Нажми на  мене</h3>`
                divuser.append(btn)
                btn.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/posts/')
                        .then(response => response.json())
                        .then(posts => {
                            for (const post of posts) {
                                if (user.id === post.userId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('cardComments');
                                    divCardComments.innerHTML = `
                                        <h3>UseriD: ${post.userId}</h3>
                                        <h4>Id: ${post.id}</h4>
                                        <h5>Title: ${post.title}</h5>
                                        <h6>Body: ${post.body}</h6>
                                        `
                                    divuser.append(divCardComments)

                                }

                            }

                        })

                }
                button.disabled = true;
            }


document.body.append(div)
                }
                )

