import { BottomNav } from './components/BottomNav'

export const Landing = () => {
    console.log('Landing -> render')

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
            <i className="text-xl mb-2">Tienda</i>

        
            <img
                src="https://plus.unsplash.com/premium_photo-1661936361131-c421746dcd0d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhfGVufDB8fDB8fHww"
                alt="Imagen 1"
                className="w-60 h-auto rounded shadow-md"
            />

  
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNthurZxgh3dENvzAsz3KN6kg6aBSBnNCCQ&s"
                alt="Imagen 2"
                className="w-60 h-auto rounded shadow-md"
            />

            <img
                src="https://concepto.de/wp-content/uploads/2020/03/arboles-baobabs-scaled-e1732035952477.jpg"
                alt="Imagen 3"
                className="w-60 h-auto rounded shadow-md"
            />

            <BottomNav />
        </div>
    )
}
