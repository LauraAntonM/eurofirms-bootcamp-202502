import { useState } from 'react'
import { logic } from '../../logic'

export function ClotheCard({ clothe, onSizeClick = () => { } }) {
    const [flipped, setFlipped] = useState(false)

    const sizes = ['XS', 'S', 'M', 'L', 'XL']


    
    const handleDeleteClick = () => {
        confirm('Delete clothe?')
            .then(result => {
                if (result)
                    try {
                        logic.removeClothe(clothe.id)
                            .then(() => onClotheDeleted())
                            .catch(error => {
                                console.error(error)

                                alert(error.message)
                            })
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }

            })
    }

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('Clohe -> render')




    return (
        <>
            <div className="relative w-full cursor-pointer mb-20" onClick={() => setFlipped(!flipped)}>
                <div
                    className={`relative w-full transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}
                    style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                        minHeight: '350px'
                    }}
                >

                    <div
                        className={`absolute inset-0 backface-hidden transition-opacity duration-300 ${flipped ? 'opacity-0' : 'opacity-100'}`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <img
                            src={clothe.image}
                            alt={clothe.description}
                            className="w-full max-h-100 object-contain"
                        />

                    </div>


                    <div
                        className={`absolute inset-0 rotate-y-180 flex flex-col items-center justify-center bg-white p-4 transition-opacity duration-300 ${flipped ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <p className="text-sm mb-2">Selecciona talla:</p>
                        <div className="flex gap-2">
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

                            {isAdmin &&
                                (<button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑</button>)}

                          
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
