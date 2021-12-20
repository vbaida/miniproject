let url = new URL(location.href)
let idpost = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/posts/' + idpost)
    .then(response => response.json())
    .then(posts => {
        let div = document.createElement('div');
        div.classList.add('container')

        let divPost = document.createElement('div')
        divPost.classList.add('post');
        divPost.innerHTML = `
                <h2>UserID: ${posts.userId}</h2>
                <h3>Id: ${posts.id}</h3>
                <h3>Title: ${posts.title}</h3>
                <h3>Body: ${posts.body}</h3>`
        div.append(divPost)
        let btn = document.createElement('button')

        btn.style.width = '200px'
        btn.style.height = '50px'
        btn.style.background = 'blue'
        btn.innerHTML = '<h3>Comment of post</h3>'
        divPost.append(btn)
        btn.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/comments' )
                .then(response => response.json())
                .then(comments => {
                        let divcomment = document.createElement('div')
                        divcomment.classList.add('container')
                        for (const comment of comments) {
                            if (posts.id === comment.postId) {
                                let divCardComments = document.createElement('div');
                                divCardComments.classList.add('cardComments');
                                divCardComments.innerHTML = `
                                         <h3>PostID: ${comment.postId}</h3>
                                         <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h4>Email: ${comment.email}</h4>
                                        <h4>Body: ${comment.body}</h4>`
                                divPost.append(divcomment)
                                divcomment.append(divCardComments)

                            }

                        }

                    }

                )


            div.append(divPost)
        }

        document.body.append(div)})