fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(posts => {
        let div = document.createElement('div');
    div.classList.add('container')
            for (const post1 of posts) {
            let divPost = document.createElement('div')
            divPost.classList.add('post');
            divPost.innerHTML = `
                <h3>UserID: ${post1.userId}</h3>
                <h4>Id: ${post1.id}</h4>
                <h5>Title: ${post1.title}</h5>
                <h6>Body: ${post1.body}</h6>`
                div.append(divPost)
                let btn = document.createElement('button')

                btn.style.width = '200px'
                btn.style.height = '50px'
                btn.innerHTML = '<h3>Comment of post</h3>'
                divPost.append(btn)
                btn.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/comments' )
                        .then(response => response.json())
                        .then(comments => {
                                let divcomment = document.createElement('div')
                                divcomment.classList.add('container')
                            for (const comment of comments) {
                                if (post1.id === comment.postId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('cardComments');
                                    divCardComments.innerHTML = `
                                         <h3>PostID: ${comment.postId}</h3>
                                         <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>`
                                    divPost.append(divcomment)
                                    divcomment.append(divCardComments)

                                }

                            }

                                }

                                )

                                }
                                div.append(divPost)
                            }

            document.body.append(div)})