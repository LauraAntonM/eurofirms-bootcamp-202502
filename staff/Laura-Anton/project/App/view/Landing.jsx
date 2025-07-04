import { Link } from 'react-router'
import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'


export const Landing = () => {
    console.log('Landing -> render')

    return (
        <div className="p-5">
            <i className="text-2xl flex flex-col justify-center mb-6 ">Tienda</i>

            <div className="img">


                <div className="w-full flex justify-center pt-4 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNthurZxgh3dENvzAsz3KN6kg6aBSBnNCCQ&s" />
                </div>

                <BottomNav />
            </div>
        </div>
    )
}

function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 flex justify-around items-center">
            <Link to="/">
                <AiOutlineHome size={24} />
            </Link>

            <Link to="/buscar">
                <AiOutlineSearch size={24} />
            </Link>

            <Link to="/menu">
                <span className="text-xs font-semibold">MENU</span>
            </Link>

            <Link to="/carrito">
                <AiOutlineShoppingCart size={24} />
            </Link>

            <Link to="/perfil">
                <AiOutlineUser size={24} />
            </Link>
        </nav>
    )
}







