fetch('http://localhost:8080/clothes', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODZkMzQyOWNjYjJiZTZmNWQwNmY2M2MiLCJpYXQiOjE3NTIwNTkyMTd9.Vsa4k4PTaHhWSBWf_H5uQqGVLgUOulrH3PtngKefhA8',
        'Content-Type': 'application/json'
    },

    body: '{"image":"https://static.zara.net/assets/public/7510/ed07/7ed1442a8f6e/cbab1c9266a4/03253375251-a1/03253375251-a1.jpg?ts=1745426168893&w=215","description": "camiseta logo smile, frase, manga corta, color blanco con bordes en cuello y mangas negro", "size":"S", "category": "CAMISAS",   "title": "CAMISETA VERANO"}'
})
    .catch(error => { throw Error('connection error') })
    .then(response => {
        const { status } = response
        if (status === 201) return

        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body

                throw new Error('json error')
            })
    })
    .then(() => console.log('clothe created'))
    .catch(error => console.error(error))

