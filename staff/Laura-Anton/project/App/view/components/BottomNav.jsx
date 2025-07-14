import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { logic } from '../../logic'
import { TbDoorExit } from "react-icons/tb"
import { PiDoorOpen } from "react-icons/pi"

export function BottomNav() {
    const navigate = useNavigate()

    const handleCreateClotheClick = () => navigate('/create-clothe')

    const handleLogin = () =>{
        navigate('/login')
    }

    const handleLogout = () => {
        logic.logoutUser()
        navigate('/login') 
    }

    let isLoggedIn = false
    let isAdmin = false

    try {
        isLoggedIn = logic.isUserLoggedIn()
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)
        alert(error.message)
    }

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 flex justify-around items-center z-50">
            <button onClick={() => navigate('/')}>
                <AiOutlineHome size={24} className="cursor-pointer" />
            </button>


            {isAdmin && (
                <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleCreateClotheClick}>
                    ➕
                </button>
            )}

            <button onClick={() => navigate('/menu')}>
                <span className="text-xs font-semibold cursor-pointer">MENU</span>
            </button>

            {!isLoggedIn && (
                <button onClick={handleLogin} className="flex flex-col items-center">
                    <PiDoorOpen size={24} />
                    <span className="text-xs">Entrar</span>
                </button>
            )}

              {isLoggedIn && (
                <button onClick={handleLogout} className="flex flex-col items-center">
                    <TbDoorExit size={24} />
                    <span className="text-xs">Salir</span>
                </button>
            )}

            <button onClick={() => navigate('/carrito')}>
                <AiOutlineShoppingCart size={24} className="cursor-pointer" />
            </button>
        </nav>
    )
}
