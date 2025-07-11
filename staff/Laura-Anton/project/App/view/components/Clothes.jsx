import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { logic } from '../../logic'
import { useContext } from '../../context'
import { BottomNav } from './BottomNav'
import { ClotheCard } from './clotheCard'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Clothes = () => {
    const { alert } = useContext()
    const { category } = useParams()
    const [clothes, setClothes] = useState([])

    useEffect(() => {
        try {
            logic.getClothes(category.toUpperCase())
                .then(clothes => {
                    setClothes(clothes)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [category])

    const navigate = useNavigate()

    return (
        <>
            <div className="p-4 pb-32">

                <AiOutlineArrowLeft
                    onClick={() => navigate(-1)}
                    size={28}
                    className="text-black cursor-pointer hover:text-gray-600 transition"
                />



                <h1 className="text-2xl capitalize mb-4 text-center">{category}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {clothes.map(clothe => (
                        <div key={clothe.id} className="flex flex-col items-center space-y-px">
                            <ClotheCard
                                clothe={clothe}
                                onSizeClick={(clothe, size) =>
                                    console.log(`Añadir al carrito: ${clothe.title} - Talla ${size}`)
                                }
                            />
                            <p className="text-center text-sm font-semibold">{clothe.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <BottomNav />
        </>
    )
}
