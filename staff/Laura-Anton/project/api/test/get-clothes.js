fetch('http://localhost:8080/clothes/vestidos', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODZkMzQyOWNjYjJiZTZmNWQwNmY2M2MiLCJpYXQiOjE3NTIwNTkyMTd9.Vsa4k4PTaHhWSBWf_H5uQqGVLgUOulrH3PtngKefhA8'
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response

        if (status === 200)
            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(posts => posts)

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            })
    })
    .then(clothes => console.log(clothes))
    .catch(error => console.error (error))