import { useNavigate } from 'react-router'
import { BottomNav } from './components/BottomNav'

export const Menu = () => {
    const navigate = useNavigate()

    return (
        <div className="relative min-h-screen bg-white px-6 py-6 font-serif ">
           
            <div className="mt-20 space-y-6 text-lg">
                <button
                    onClick={() => navigate('/clothes/CAMISAS')}
                    className="text-left cursor-pointer block mb-8"
                >
                    CAMISAS/CAMISETAS
                </button>

                <button
                    onClick={() => navigate('/clothes/TOP')}
                    className="text-left cursor-pointer block mb-8"
                >
                    TOP
                </button>

                <button
                    onClick={() => navigate('/clothes/VESTIDOS')}
                    className="text-left cursor-pointer block mb-8"
                >
                    VESTIDOS
                </button>

                <BottomNav />
            </div>
        </div>
    )
}
