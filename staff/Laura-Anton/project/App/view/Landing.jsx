import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router'

export const Landing = ({}) => {
    const navigate = useNavigate()

    console.log('Landing -> render')

    return (
        <div className="p-5">
            <i className="text-2xl flex flex-col justify-center mb-6 ">Tienda</i>

            <div className="img">

                <div className="w-full flex justify-center pt-4 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNthurZxgh3dENvzAsz3KN6kg6aBSBnNCCQ&s" />
                </div>

                <BottomNav navigate={navigate} />
            </div>
        </div>
    )
}

function BottomNav({navigate}) {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 flex justify-around items-center">
            <button onClick={() => navigate('/Inicio')}>
                <AiOutlineHome size={24} />
            </button>

            <button onClick={() => navigate('/buscar')}>
                <AiOutlineSearch size={24} />
            </button>

            <button onClick={()=> navigate('/menu')}>
                <span className="text-xs font-semibold">MENU</span>
            </button>

            <button onClick={()=> navigate('/carrito')}>
                <AiOutlineShoppingCart size={24} />
            </button>

            <button onClick={() => navigate('/login')}>
                <AiOutlineUser size={24} />
            </button>
        </nav>
    )
}



