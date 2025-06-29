# tiendaapp
// seguir rellenando con caracteristicas de la app

![Lion](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9zdmlkNzJ4NXpxNXg3a29mdngwbWw3cmZ2bTV4dWM0NW9zcmhxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGTdBknWrIOJ50R76O/giphy.gif)

![Image](https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg)

## intro
![Lion](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9zdmlkNzJ4NXpxNXg3a29mdngwbWw3cmZ2bTV4dWM0NW9zcmhxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGTdBknWrIOJ50R76O/giphy.gif)


![cat](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzA4eWQwdmduZWp5aXYwcjhkcXViM3Z4MWx1bTBjcHQ1Z2o2aG03eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iF8k1BinZ3gFmVAWL3/giphy.gif)


### Use cases

regular (user)

- search clothes
- book clothes
- register user
- logic user
- add cart


### Prototype

[Figma] (https://www.figma.com/design/EWIxkvo6veQ0Es4rWAMq8f/Untitled?t=FiVNzU8oZkkTdD9s-0)

## Technical

### Architecture

[App] -> [Api] -> [DB]

App 
- components
- logic
- data

Api
- routes
- logic
- data

### UI Components

App
    |- Landing
    |- Register
    |- Logic
    |- Home
        |-Posts
        |- CreatePost

Api

Post
|- Post

    
### Data Model

User
- id(UUID)
- name (String, required)
- email (String, required, unique)
- password (String, values: regular | admin, required)
- telefono (Number)

Clothes
- id (UUID) 
- image (String, Required)
- description (String, Required) 
- size (String, Required, Enum(XS-XL))
- category (string, Enum, required)
- title (String, required)

### Technologies

- React
- Express
- Mongo
- Node
- Tailwind
- JWT
- Bcrypt
