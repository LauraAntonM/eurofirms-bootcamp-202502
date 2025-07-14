import { useState } from 'react'
import { logic } from '../../logic'

export function ClotheCard({ clothe, onSizeClick = () => {}, onClotheDeleted = () => {} }) {
    const [flipped, setFlipped] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const sizes = ['XS', 'S', 'M', 'L', 'XL']

    const handleDeleteClick = (e) => {
        e.stopPropagation()
        setShowConfirm(true)
    }

    const handleConfirm = () => {
        logic.removeClothe(clothe.id)
            .then(() => {
                setShowConfirm(false)
                onClotheDeleted()
            })
            .catch(error => {
                console.error(error)
                alert(error.message)
                setShowConfirm(false)
            })
    }

    const handleCancel = () => {
        setShowConfirm(false)
    }

    let isAdmin = false
    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)
        alert(error.message)
    }

    return (
        <div className="relative w-full mb-6">
            <div
                className="relative w-full h-[400px] cursor-pointer"
                onClick={() => setFlipped(!flipped)}
                style={{ perspective: '1000px' }}
            >
                <div
                    className={`transition-transform duration-700 w-full h-full relative ${
                        flipped ? 'transform rotate-y-180' : ''
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="absolute inset-0 w-full h-full backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src={clothe.image}
                            alt={clothe.description}
                            className="w-full h-full object-cover rounded"
                        />
                        <p className="text-center mt-2 text-sm font-semibold">{clothe.title}</p>
                    </div>

                   
                    <div
                        className="absolute inset-0 w-full h-full rotate-y-180 flex flex-col items-center justify-center bg-white p-4"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <p className="text-sm mb-2">Selecciona talla:</p>
                        <div className="flex gap-2 flex-wrap justify-center">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    className="px-3 py-1 border border-black rounded hover:bg-black hover:text-white text-sm transition cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onSizeClick(clothe, size)
                                    }}
                                >
                                    {size}
                                </button>
                            ))}

                            {isAdmin && (
                                <div className="relative">
                                    <button
                                        className="border-4 border-black px-2 mx-1 cursor-pointer"
                                        onClick={handleDeleteClick}
                                    >
                                        🗑
                                    </button>

                                    {showConfirm && (
                                        <div className="absolute top-10 right-0 bg-white border border-gray-300 shadow-lg p-2 rounded z-50">
                                            <p className="text-sm mb-2">¿Borrar esta prenda?</p>
                                            <div className="flex gap-2">
                                                <button
                                                    className="text-sm bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        handleCancel()
                                                    }}
                                                >
                                                    Cancelar
                                                </button>
                                                <button
                                                    className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        handleConfirm()
                                                    }}
                                                >
                                                    Borrar
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
