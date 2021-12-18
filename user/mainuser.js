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
                            <h2>Id: ${user.id}</h2>
                            <h1>Name: ${user.name}</h1>
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
                btn.innerHTML = '<h3>Post of current user</h3>'
                divuser.append(btn)
            btn.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/posts' )
                        .then(response => response.json())
                        .then(posts => {
                            let divcardpost = document.createElement('div')
                            divcardpost.classList.add('container')
                            for (const post of posts) {

                                if (user.id === post.userId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('cardComments');
                                    divCardComments.innerHTML = `
                                        <h5>Title: ${post.title}</h5>`

                                    let btn1 = document.createElement('button')
                                    divCardComments.append(btn1)
                                    btn1.style.width = '200px'
                                    btn1.style.height = '50px'
                                    btn1.innerHTML = '<a href="../post/post-details.html" class="btn">Переход по ссылке</a>'


                                      divuser.append(divcardpost)
                                        divcardpost.append(divCardComments)
                                    divCardComments.append(btn1)
                                                        // button.disabled = true;
                                                    }
                                                    }
                                                }
                                            )

                                    }

                        }

document.body.append(div)
}
)