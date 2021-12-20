let url = new URL(location.href)
let iduser = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + iduser )
    .then(response => response.json())
    .then(users => {
            let div = document.createElement('div')
            div.classList.add('container')

            let divuser = document.createElement('div');
            divuser.classList.add('post');
            div.append(divuser)
            divuser.innerHTML = `
                            <h2>Id: ${users.id}</h2>
                            <h1>Name: ${users.name}</h1>
                            <h3>Username: ${users.username} </h3>
                            <h3>Email: ${users.email}</h3>
                            <h3>Street: ${users.address.street}</h3>
                            <h3>Suite: ${users.address.suite}</h3>
                            <h3>City: ${users.address.city}</h3>
                            <h3>Zipcode: ${users.address.zipcode}</h3>
                            <h3>Lat: ${users.address.geo.lat}</h3>
                            <h3>Lng: ${users.address.geo.lng}</h3>
                            <h3>Phone: ${users.phone}</h3>
                            <h3>Website: ${users.website}</h3>
                            <h3>Companyname: ${users.company.name}</h3>
                            <h3>CompanycatchPhrasee: ${users.company.catchPhrase}</h3>
                            <h3>Companybs: ${users.company.bs}</h3>`
            let btn = document.createElement('button')
            btn.style.width = '1500px'
            btn.style.height = '50px'
        btn.style.background = 'green'
            btn.innerHTML = '<h3>Post of current user</h3>'
            divuser.append(btn)
            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts' )
                    .then(response => response.json())
                    .then(posts => {
                            let divcardpost = document.createElement('div')
                            divcardpost.classList.add('container')
                            for (const post of posts) {

                                if (users.id === post.userId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('cardComments');
                                    divCardComments.innerHTML = `
                                        <h2>UserId: ${post.userId}</h2>
                                        <h3>Id: ${post.id}</h3>
                                        <h4>Title: ${post.title}</h4>`

                                    let detailslink = document.createElement('a')
                                    detailslink.classList.add('button')
                                    detailslink.innerHTML = `<h2>Деталі юзера</h2>`
                                    detailslink.href = '../post/post-details.html?id=' + post.id



                                    divuser.append(divcardpost)
                                    divcardpost.append(divCardComments)
                                    divCardComments.append(detailslink)


                                }

                            }

                        }

                    )

            }



            document.body.append(div)
        }
    )