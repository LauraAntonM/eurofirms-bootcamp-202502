import { useNavigate } from 'react-router'
import { AiOutlineHome } from 'react-icons/ai'

export const Menu = ({onBack}) => {
    const navigate = useNavigate()

    return (
    <div className="relative min-h-screen bg-white px-6 py-6 font-serif">

        <button onClick= {() => navigate('/')} className="absolute top-4 right-4">
        <AiOutlineHome size={24} />
            
        </button>


        <div className="mt-20 space-y-6 text-lg">
            <div>CAMISAS/CAMISETAS</div>
            <div>TOP</div>
            <div>VESTIDOS</div>
        </div>
    </div>

    )
}

