import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router'


export function BottomNav() {
    const navigate = useNavigate()


    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 flex justify-around items-center ">
            <button onClick={() => navigate('/')}>
                <AiOutlineHome size={24} className="cursor-pointer"/>
            </button>

            <button onClick={() => navigate('/buscar')}>
                <AiOutlineSearch size={24} className="cursor-pointer"/>
            </button>

            <button onClick={() => navigate('/menu')}>
                <span className="text-xs font-semibold cursor-pointer ">MENU</span>
            </button>
            <button onClick={() => navigate('/carrito')}>
                <AiOutlineShoppingCart size={24} className="cursor-pointer" />
            </button>

            <button onClick={() => navigate('/login')}>
                <AiOutlineUser size={24} className="cursor-pointer" />
            </button>
        </nav>
    )
}