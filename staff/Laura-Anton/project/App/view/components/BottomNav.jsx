import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { logic } from '../../logic'

export function BottomNav() {
    const navigate = useNavigate()

    const handleCreateClotheClick = () => navigate('/create-clothe')

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }


    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 flex justify-around items-center ">
            <button onClick={() => navigate('/')}>
                <AiOutlineHome size={24} className="cursor-pointer" />
            </button>

            <button onClick={() => navigate('/buscar')}>
                <AiOutlineSearch size={24} className="cursor-pointer" />
            </button>

            {(isAdmin) && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleCreateClotheClick}>➕</button>}

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